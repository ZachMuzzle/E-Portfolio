class navBarToggle {
    private buttonClick: boolean;
    private burger: HTMLElement;
    private navLinks: HTMLElement;
    private navBar: HTMLElement;
    private navBarHome: HTMLElement;

    constructor(burgerId: string, navLinksId: string, navBarHomeId: string, navBarClass: string) {
        this.buttonClick = false;
        this.burger = document.getElementById(burgerId) as HTMLElement;
        this.navBar = document.querySelector(navBarClass) as HTMLElement;
        this.navBarHome = document.getElementById(navBarHomeId) as HTMLElement;
        this.navLinks = document.getElementById(navLinksId) as HTMLElement;

        this.addEventListeners();
    }

    private toggleClasses(): void {
        this.burger.classList.toggle('active');
        this.navLinks.classList.toggle('show');
    }

    private handleBurgerClick(): void {
        this.toggleClasses();

        if(this.buttonClick) {
            this.navBar.style.display = "none";
            this.navBarHome.style.display = "flex";
        } else {
            this.navBar.style.display = "block";
            this.navBarHome.style.display = "none";
        }

        this.buttonClick = !this.buttonClick;
    }

    private handleWindowResize(): void {
        if(this.burger.classList.contains('active')) {
            this.toggleClasses();
            this.navBar.style.display = "none";
            this.buttonClick = false;
            this.navBarHome.style.display = "flex";
        }
    }

    private addEventListeners(): void {
        this.burger.addEventListener('click', () => this.handleBurgerClick());
        window.addEventListener('resize', () => this.handleWindowResize());
    }
}

const navToggle = new navBarToggle("burger","nav-links","nav-bar-home",".navbar");
