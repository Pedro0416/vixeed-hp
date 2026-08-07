type Cleanup = () => void;

export function initLegacyEffects(): Cleanup {
  document.documentElement.classList.remove("no-js");

  const cleanups: Cleanup[] = [];

  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            revealIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((el) => revealIO.observe(el));
    cleanups.push(() => revealIO.disconnect());
  }

  const fades = document.querySelectorAll(".fade");
  if (fades.length) {
    const fadeIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.1 },
    );
    fades.forEach((el) => fadeIO.observe(el));
    cleanups.push(() => fadeIO.disconnect());
  }

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  if (hamburger && nav) {
    const onHamburgerClick = () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("open");
      document.body.style.overflow = nav.classList.contains("open")
        ? "hidden"
        : "";
    };
    const onNavLinkClick = () => {
      hamburger.classList.remove("active");
      nav.classList.remove("open");
      document.body.style.overflow = "";
    };
    hamburger.addEventListener("click", onHamburgerClick);
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", onNavLinkClick),
    );
    cleanups.push(() => {
      hamburger.removeEventListener("click", onHamburgerClick);
      nav.querySelectorAll("a").forEach((a) =>
        a.removeEventListener("click", onNavLinkClick),
      );
      document.body.style.overflow = "";
    });
  }

  const accCleanups: Cleanup[] = [];
  document.querySelectorAll(".acc-item").forEach((item) => {
    const question = item.querySelector(".acc-q");
    if (!question) return;
    const onClick = () => {
      const wasOpen = item.classList.contains("open");
      item.classList.toggle("open");
      const ans = item.querySelector(".acc-a") as HTMLElement | null;
      if (ans) ans.style.maxHeight = wasOpen ? "0" : `${ans.scrollHeight}px`;
    };
    question.addEventListener("click", onClick);
    accCleanups.push(() => question.removeEventListener("click", onClick));
  });
  cleanups.push(() => accCleanups.forEach((fn) => fn()));

  const heroHeader = document.querySelector(".header--hero");
  if (heroHeader) {
    let ticking = false;
    const onHeaderScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          heroHeader.classList.toggle("is-scrolled", window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onHeaderScroll, { passive: true });
    onHeaderScroll();
    cleanups.push(() =>
      window.removeEventListener("scroll", onHeaderScroll),
    );
  }

  const parallaxBg = document.querySelector(
    ".hero-bg-parallax",
  ) as HTMLElement | null;
  if (parallaxBg) {
    let pTicking = false;
    const onParallaxScroll = () => {
      if (!pTicking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y < window.innerHeight * 1.5) {
            parallaxBg.style.transform = `translateY(${y * 0.25}px)`;
          }
          pTicking = false;
        });
        pTicking = true;
      }
    };
    window.addEventListener("scroll", onParallaxScroll, { passive: true });
    cleanups.push(() =>
      window.removeEventListener("scroll", onParallaxScroll),
    );
  }

  const countEls = document.querySelectorAll(".countup");
  if (countEls.length) {
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const text = el.textContent ?? "";
          const match = text.match(/^([\d,]+)/);
          if (!match) return;
          const target = parseInt(match[1].replace(/,/g, ""), 10);
          const suffix = text.replace(match[1], "");
          const duration = 1200;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased).toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          countIO.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );
    countEls.forEach((el) => countIO.observe(el));
    cleanups.push(() => countIO.disconnect());
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const inputs = contactForm.querySelectorAll(
      ".contact-form-input, .contact-form-textarea",
    );

    const clearErrors = () => {
      inputs.forEach((el) => el.classList.remove("is-error"));
      contactForm.querySelectorAll(".contact-form-error").forEach((el) => el.remove());
    };

    const showError = (input: Element, message: string) => {
      input.classList.add("is-error");
      const wrap = input.closest(".contact-form-field, .contact-form-sub");
      if (wrap && !wrap.querySelector(".contact-form-error")) {
        const err = document.createElement("span");
        err.className = "contact-form-error";
        err.textContent = message;
        input.after(err);
      }
    };

    const onSubmit = (e: Event) => {
      e.preventDefault();
      clearErrors();
      let valid = true;

      if (!contactForm.querySelector('input[name="purpose"]:checked')) {
        valid = false;
        const wrap = contactForm.querySelector(".contact-form-radios");
        if (wrap && !wrap.querySelector(".contact-form-error")) {
          const err = document.createElement("span");
          err.className = "contact-form-error";
          err.textContent = "ご用件を選択してください";
          wrap.after(err);
        }
      }

      const nameEl = contactForm.querySelector("#name") as HTMLInputElement;
      if (!nameEl.value.trim()) {
        valid = false;
        showError(nameEl, "お名前を入力してください");
      }

      const furiganaEl = contactForm.querySelector(
        "#furigana",
      ) as HTMLInputElement;
      if (!furiganaEl.value.trim()) {
        valid = false;
        showError(furiganaEl, "ふりがなを入力してください");
      }

      const telEl = contactForm.querySelector("#tel") as HTMLInputElement;
      if (!telEl.value.trim()) {
        valid = false;
        showError(telEl, "電話番号を入力してください");
      }

      const emailEl = contactForm.querySelector("#email") as HTMLInputElement;
      if (!emailEl.value.trim()) {
        valid = false;
        showError(emailEl, "メールアドレスを入力してください");
      } else if (!emailRe.test(emailEl.value.trim())) {
        valid = false;
        showError(emailEl, "メールアドレスの形式が正しくありません");
      }

      const messageEl = contactForm.querySelector(
        "#message",
      ) as HTMLTextAreaElement;
      if (!messageEl.value.trim()) {
        valid = false;
        showError(messageEl, "お問い合わせ内容を入力してください");
      }

      if (!valid) {
        contactForm.querySelector(".is-error")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        return;
      }

      const purpose =
        (
          contactForm.querySelector(
            'input[name="purpose"]:checked',
          ) as HTMLInputElement | null
        )?.value ?? "";
      const company = (
        contactForm.querySelector("#company") as HTMLInputElement
      ).value.trim();
      const body = [
        `【ご用件】${purpose}`,
        `【法人名】${company || "（未入力）"}`,
        `【お名前】${nameEl.value.trim()}`,
        `【ふりがな】${furiganaEl.value.trim()}`,
        `【電話番号】${telEl.value.trim()}`,
        `【メールアドレス】${emailEl.value.trim()}`,
        "",
        "【お問い合わせ内容】",
        messageEl.value.trim(),
      ].join("\n");
      window.location.href = `mailto:office@vixeed.jp?subject=${encodeURIComponent("お問い合わせ")}&body=${encodeURIComponent(body)}`;
    };

    contactForm.addEventListener("submit", onSubmit);
    cleanups.push(() => contactForm.removeEventListener("submit", onSubmit));
  }

  const presidentMore = document.getElementById("president-message-more");
  const presidentReadMore = document.getElementById("president-read-more");
  const presidentReadBack = document.getElementById("president-read-back");
  const presidentAnchor = document.getElementById("president-message-anchor");
  if (
    presidentMore &&
    presidentReadMore &&
    presidentReadBack &&
    presidentAnchor
  ) {
    const onReadMore = () => {
      presidentMore.hidden = false;
      presidentReadMore.hidden = true;
      presidentReadMore.setAttribute("aria-expanded", "true");
    };
    const onReadBack = () => {
      presidentMore.hidden = true;
      presidentReadMore.hidden = false;
      presidentReadMore.setAttribute("aria-expanded", "false");
      presidentAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
      presidentReadMore.focus({ preventScroll: true });
    };
    presidentReadMore.addEventListener("click", onReadMore);
    presidentReadBack.addEventListener("click", onReadBack);
    cleanups.push(() => {
      presidentReadMore.removeEventListener("click", onReadMore);
      presidentReadBack.removeEventListener("click", onReadBack);
    });
  }

  return () => cleanups.forEach((fn) => fn());
}
