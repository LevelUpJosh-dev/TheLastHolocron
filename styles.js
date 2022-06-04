function BaseStyles() {
  return `
        /*
     * Globals
     */
    
    #logo {
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }
    
    /* Custom default button */
    .btn-secondary,
    .btn-secondary:hover,
    .btn-secondary:focus {
        color: #333;
        text-shadow: none; /* Prevent inheritance from \`body\` */
    }
    
    
    /*
     * Base structure
     */
    
    body {
        text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    }
    
    .cover-container {
        max-width: 42em;
    }
    
    
    /*
     * Header
     */
    
    .nav-masthead .nav-link {
        padding: .25rem 0;
        font-weight: 700;
        color: rgba(255, 255, 255, .5);
        background-color: transparent;
        border-bottom: .25rem solid transparent;
    }
    
    .nav-masthead .nav-link:hover,
    .nav-masthead .nav-link:focus {
        border-bottom-color: rgba(255, 255, 255, .25);
    }
    
    .nav-masthead .nav-link + .nav-link {
        margin-left: 1rem;
    }
    
    .nav-masthead .active {
        color: #fff;
        border-bottom-color: #fff;
    }
    `;
}

export { BaseStyles };
