const ad = document.querySelector(".ad");
const footer=document.querySelector(".footer");

function hideAd() {
  ad.style.display = "none";
}

const btnUp = {
  el: document.querySelector('.up'),
  show() {
    this.el.classList.remove('up_hide');
    },
  hide() {
    this.el.classList.add('up_hide');
    },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 200 ? this.show() : this.hide();
    });
    document.querySelector('.up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

const avoidFooter = {
  ad: document.querySelector('.ad'),
  main: document.querySelector('main'),
  footer: document.querySelector('.footer'),
  body: document.querySelector('body'),
  avoid() {
    let mainAdPosition = this.main.getBoundingClientRect().bottom + window.scrollY - this.ad.getBoundingClientRect().height;
    this.ad.style.position = 'absolute';
    this.ad.style.top = String(mainAdPosition) + 'px';
  },
  returnBack() {
    this.ad.style.position = 'fixed';
    this.ad.style.top = '18.5rem';
  },
  checkOffset() {
    window.addEventListener("scroll", () => {
      let adAbsPosition = this.ad.getBoundingClientRect().bottom + window.scrollY;
      let mainAbsPosition = this.main.getBoundingClientRect().bottom + window.scrollY;
      let breakPoint = window.innerHeight - this.footer.getBoundingClientRect().height;
      let mainBottomPosition = this.body.getBoundingClientRect().bottom - 60;
      if (adAbsPosition >= (mainAbsPosition)) {
        this.avoid();
      }
      if (mainBottomPosition > breakPoint) {
        this.returnBack();
      }
    })      
    },
};

avoidFooter.checkOffset();