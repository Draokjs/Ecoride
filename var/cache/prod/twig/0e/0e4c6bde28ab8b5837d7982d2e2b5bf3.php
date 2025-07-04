<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* security/login.html.twig */
class __TwigTemplate_bbfc207554271f6f865eee51d41422fa extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/login.html.twig"));

        // line 1
        yield "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT\" crossorigin=\"anonymous\">
    <link rel=\"stylesheet\" href=\"Style/Bootstrap.css\">
    <link rel=\"stylesheet\" href=\"Style/Style.css\">
    <link rel=\"stylesheet\" href=\"Style/Homepage.css\">
    <link rel=\"stylesheet\" href=\"Style/Login.css\">
    <link rel=\"icon\" href=\"Image/Logo.png\" alt=\"Favicon\">
    <title>Connexion</title>
</head>
<body>

  <!-- Header -->
<header>  
  <nav>
    <!-- Logo -->
    <div class=\"container-fluid gap-3\">
      <div class=\"row d-flex align-items-center bg-body-tertiary\">
        <div class=\"col-md-2\">
          <img src=\"Image/Logo.png\" alt=\"Logo\">
        </div>
        <!-- Links -->
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"accueil\">
          <a class=\"nav-link\" href=\"index.php\" target=\"_self\">Accueil</a>
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"trajets\">
          <a class=\"nav-link\" href=\"Resultat.html\" target=\"_self\">Vos trajets</a>
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"espace\">
          <a class=\"nav-link\" href=\"Mon espace.html\" target=\"_self\">Mon espace</a>
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"Contacts\">
          <a class=\"nav-link\" href=\"Contacts.html\" target=\"_self\">Contacts</a>
        </div>
        <!-- Dropdown menu -->
        <div class=\"col-md-2 text-center login\">
          <div class=\"dropdown\">
            <button class=\"Loginbutton dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"border: none; background-color: transparent;\">
              <span class=\"Seconnecter\">
                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"var(--bs-main-color)\" class=\"bi bi-person-circle\" viewBox=\"0 0 16 16\">
                  <path d=\"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0\"/>
                  <path fill-rule=\"evenodd\" d=\"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1\"/>
                </svg>
              </span>
            </button>
            <!-- Login button -->
            <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">
              <li><a class=\"dropdown-item\" href=\"Login.html\">Se connecter</a></li>
              <li><a class=\"dropdown-item\" href=\"register.html\">S'inscrire</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

<main>
    <div class=\"connexionForm\">
        <div class=\"container\">
            <div class=\"col-12 text-center mt-4\">
                <h1>Connexion</h1>
                <div class=\"col mt-3\">
                  <form action=\"";
        // line 67
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("login");
        yield "\" method=\"POST\">
                      <label for=\"email\">Adresse email :</label>
                      <input type=\"email\" name=\"email\" required /><br><br>

                      <label for=\"password\">Mot de passe :</label>
                      <input type=\"password\" name=\"password\" required /><br><br>

                      <input type=\"submit\" value=\"Se connecter\"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Footer -->
<footer class=\"text-center text-lg-start bg-body-tertiary text-muted\">
  <!-- Section: Social media -->
  <section class=\"d-flex justify-content-center justify-content-lg-between p-4 border-bottom\">
    <!-- Left -->
    <div class=\"me-5 d-none d-lg-block\">
      <span>Get connected with us on social networks:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div>
      <a href=\"\" class=\"me-4 text-reset\">
        <i class=\"fab fa-facebook-f\"></i>
      </a>
      <a href=\"\" class=\"me-4 text-reset\">
        <i class=\"fab fa-twitter\"></i>
      </a>
      <a href=\"\" class=\"me-4 text-reset\">
        <i class=\"fab fa-google\"></i>
      </a>
      <a href=\"\" class=\"me-4 text-reset\">
        <i class=\"fab fa-instagram\"></i>
      </a>
      <a href=\"\" class=\"me-4 text-reset\">
        <i class=\"fab fa-linkedin\"></i>
      </a>
      <a href=\"\" class=\"me-4 text-reset\">
        <i class=\"fab fa-github\"></i>
      </a>
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class=\"\">
    <div class=\"container text-center text-md-start mt-5\">
      <!-- Grid row -->
      <div class=\"row mt-3\">
        <!-- Grid column -->
        <div class=\"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4\">
          <!-- Content -->
          <h6 class=\"text-uppercase fw-bold mb-4\">
            <i class=\"fas fa-gem me-3\"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4\">
          <!-- Links -->
          <h6 class=\"text-uppercase fw-bold mb-4\">
            Products
          </h6>
          <p>
            <a href=\"#!\" class=\"text-reset\">Angular</a>
          </p>
          <p>
            <a href=\"#!\" class=\"text-reset\">React</a>
          </p>
          <p>
            <a href=\"#!\" class=\"text-reset\">Vue</a>
          </p>
          <p>
            <a href=\"#!\" class=\"text-reset\">Laravel</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4\">
          <!-- Links -->
          <h6 class=\"text-uppercase fw-bold mb-4\">
            Useful links
          </h6>
          <p>
            <a href=\"#!\" class=\"text-reset\">Pricing</a>
          </p>
          <p>
            <a href=\"#!\" class=\"text-reset\">Settings</a>
          </p>
          <p>
            <a href=\"#!\" class=\"text-reset\">Orders</a>
          </p>
          <p>
            <a href=\"#!\" class=\"text-reset\">Help</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4\">
          <!-- Links -->
          <h6 class=\"text-uppercase fw-bold mb-4\">Contact</h6>
          <p><i class=\"fas fa-home me-3\"></i> New York, NY 10012, US</p>
          <p>
            <i class=\"fas fa-envelope me-3\"></i>
            info@example.com
          </p>
          <p><i class=\"fas fa-phone me-3\"></i> + 01 234 567 88</p>
          <p><i class=\"fas fa-print me-3\"></i> + 01 234 567 89</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class=\"text-center p-4\" style=\"background-color: rgba(0, 0, 0, 0.05);\">
    © 2025 Copyright:
    <a class=\"text-reset fw-bold\" href=\"https://mdbootstrap.com/\">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
</footer>


<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO\" crossorigin=\"anonymous\"></script>
</body>
</html>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "security/login.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable(): bool
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  113 => 67,  45 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT\" crossorigin=\"anonymous\">
    <link rel=\"stylesheet\" href=\"Style/Bootstrap.css\">
    <link rel=\"stylesheet\" href=\"Style/Style.css\">
    <link rel=\"stylesheet\" href=\"Style/Homepage.css\">
    <link rel=\"stylesheet\" href=\"Style/Login.css\">
    <link rel=\"icon\" href=\"Image/Logo.png\" alt=\"Favicon\">
    <title>Connexion</title>
</head>
<body>

  <!-- Header -->
<header>  
  <nav>
    <!-- Logo -->
    <div class=\"container-fluid gap-3\">
      <div class=\"row d-flex align-items-center bg-body-tertiary\">
        <div class=\"col-md-2\">
          <img src=\"Image/Logo.png\" alt=\"Logo\">
        </div>
        <!-- Links -->
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"accueil\">
          <a class=\"nav-link\" href=\"index.php\" target=\"_self\">Accueil</a>
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"trajets\">
          <a class=\"nav-link\" href=\"Resultat.html\" target=\"_self\">Vos trajets</a>
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"espace\">
          <a class=\"nav-link\" href=\"Mon espace.html\" target=\"_self\">Mon espace</a>
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"Contacts\">
          <a class=\"nav-link\" href=\"Contacts.html\" target=\"_self\">Contacts</a>
        </div>
        <!-- Dropdown menu -->
        <div class=\"col-md-2 text-center login\">
          <div class=\"dropdown\">
            <button class=\"Loginbutton dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"border: none; background-color: transparent;\">
              <span class=\"Seconnecter\">
                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"var(--bs-main-color)\" class=\"bi bi-person-circle\" viewBox=\"0 0 16 16\">
                  <path d=\"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0\"/>
                  <path fill-rule=\"evenodd\" d=\"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1\"/>
                </svg>
              </span>
            </button>
            <!-- Login button -->
            <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">
              <li><a class=\"dropdown-item\" href=\"Login.html\">Se connecter</a></li>
              <li><a class=\"dropdown-item\" href=\"register.html\">S'inscrire</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

<main>
    <div class=\"connexionForm\">
        <div class=\"container\">
            <div class=\"col-12 text-center mt-4\">
                <h1>Connexion</h1>
                <div class=\"col mt-3\">
                  <form action=\"{{ path('login') }}\" method=\"POST\">
                      <label for=\"email\">Adresse email :</label>
                      <input type=\"email\" name=\"email\" required /><br><br>

                      <label for=\"password\">Mot de passe :</label>
                      <input type=\"password\" name=\"password\" required /><br><br>

                      <input type=\"submit\" value=\"Se connecter\"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- Footer -->
<footer class=\"text-center text-lg-start bg-body-tertiary text-muted\">
  <!-- Section: Social media -->
  <section class=\"d-flex justify-content-center justify-content-lg-between p-4 border-bottom\">
    <!-- Left -->
    <div class=\"me-5 d-none d-lg-block\">
      <span>Get connected with us on social networks:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div>
      <a href=\"\" class=\"me-4 text-reset\">
        <i class=\"fab fa-facebook-f\"></i>
      </a>
      <a href=\"\" class=\"me-4 text-reset\">
        <i class=\"fab fa-twitter\"></i>
      </a>
      <a href=\"\" class=\"me-4 text-reset\">
        <i class=\"fab fa-google\"></i>
      </a>
      <a href=\"\" class=\"me-4 text-reset\">
        <i class=\"fab fa-instagram\"></i>
      </a>
      <a href=\"\" class=\"me-4 text-reset\">
        <i class=\"fab fa-linkedin\"></i>
      </a>
      <a href=\"\" class=\"me-4 text-reset\">
        <i class=\"fab fa-github\"></i>
      </a>
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class=\"\">
    <div class=\"container text-center text-md-start mt-5\">
      <!-- Grid row -->
      <div class=\"row mt-3\">
        <!-- Grid column -->
        <div class=\"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4\">
          <!-- Content -->
          <h6 class=\"text-uppercase fw-bold mb-4\">
            <i class=\"fas fa-gem me-3\"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4\">
          <!-- Links -->
          <h6 class=\"text-uppercase fw-bold mb-4\">
            Products
          </h6>
          <p>
            <a href=\"#!\" class=\"text-reset\">Angular</a>
          </p>
          <p>
            <a href=\"#!\" class=\"text-reset\">React</a>
          </p>
          <p>
            <a href=\"#!\" class=\"text-reset\">Vue</a>
          </p>
          <p>
            <a href=\"#!\" class=\"text-reset\">Laravel</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4\">
          <!-- Links -->
          <h6 class=\"text-uppercase fw-bold mb-4\">
            Useful links
          </h6>
          <p>
            <a href=\"#!\" class=\"text-reset\">Pricing</a>
          </p>
          <p>
            <a href=\"#!\" class=\"text-reset\">Settings</a>
          </p>
          <p>
            <a href=\"#!\" class=\"text-reset\">Orders</a>
          </p>
          <p>
            <a href=\"#!\" class=\"text-reset\">Help</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4\">
          <!-- Links -->
          <h6 class=\"text-uppercase fw-bold mb-4\">Contact</h6>
          <p><i class=\"fas fa-home me-3\"></i> New York, NY 10012, US</p>
          <p>
            <i class=\"fas fa-envelope me-3\"></i>
            info@example.com
          </p>
          <p><i class=\"fas fa-phone me-3\"></i> + 01 234 567 88</p>
          <p><i class=\"fas fa-print me-3\"></i> + 01 234 567 89</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class=\"text-center p-4\" style=\"background-color: rgba(0, 0, 0, 0.05);\">
    © 2025 Copyright:
    <a class=\"text-reset fw-bold\" href=\"https://mdbootstrap.com/\">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
</footer>


<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO\" crossorigin=\"anonymous\"></script>
</body>
</html>
", "security/login.html.twig", "C:\\Ecoride symfony\\my_project\\templates\\security\\login.html.twig");
    }
}
