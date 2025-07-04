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

/* partials/header.html.twig */
class __TwigTemplate_6a69e4374a3d155db190ac36ef1a1ff8 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "partials/header.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "partials/header.html.twig"));

        // line 1
        yield "<header>
  <nav>
    <div class=\"container-fluid gap-3\">
      <div class=\"row d-flex align-items-center bg-body-tertiary\">
        <div class=\"col-md-2\">
          <img src=\"";
        // line 6
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("Image/Logo.png"), "html", null, true);
        yield "\" alt=\"Logo\" />
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"accueil\">
          <a class=\"nav-link\" href=\"";
        // line 9
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("home");
        yield "\">Accueil</a>
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"trajets\">
          <a class=\"nav-link\" href=\"";
        // line 12
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("trip_resultat");
        yield "\">Vos trajets</a>
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"espace\">
        <a class=\"nav-link\" href=\"";
        // line 15
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("mon_espace");
        yield "\">Mon espace</a>
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"Contacts\">
        <a class=\"nav-link\" href=\"";
        // line 18
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("contact");
        yield "\">Contacts</a>        
        </div>
        <div class=\"col-md-2 text-center login\">
          <div class=\"dropdown\">
            <button class=\"Loginbutton dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"border: none; background-color: transparent;\">
              <span class=\"Seconnecter\">
                <!-- SVG icon here -->
              </span>
            </button>
            <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">
              <li><a class=\"dropdown-item\" href=\"";
        // line 28
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("login");
        yield "\">Se connecter</a></li>
              <li><a class=\"dropdown-item\" href=\"";
        // line 29
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("register");
        yield "\">S'inscrire</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "partials/header.html.twig";
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
        return array (  96 => 29,  92 => 28,  79 => 18,  73 => 15,  67 => 12,  61 => 9,  55 => 6,  48 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<header>
  <nav>
    <div class=\"container-fluid gap-3\">
      <div class=\"row d-flex align-items-center bg-body-tertiary\">
        <div class=\"col-md-2\">
          <img src=\"{{ asset('Image/Logo.png') }}\" alt=\"Logo\" />
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"accueil\">
          <a class=\"nav-link\" href=\"{{ path('home') }}\">Accueil</a>
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"trajets\">
          <a class=\"nav-link\" href=\"{{ path('trip_resultat') }}\">Vos trajets</a>
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"espace\">
        <a class=\"nav-link\" href=\"{{ path('mon_espace') }}\">Mon espace</a>
        </div>
        <div class=\"col-md-2 text-center fs-4 menu-item\" id=\"Contacts\">
        <a class=\"nav-link\" href=\"{{ path('contact') }}\">Contacts</a>        
        </div>
        <div class=\"col-md-2 text-center login\">
          <div class=\"dropdown\">
            <button class=\"Loginbutton dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"border: none; background-color: transparent;\">
              <span class=\"Seconnecter\">
                <!-- SVG icon here -->
              </span>
            </button>
            <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">
              <li><a class=\"dropdown-item\" href=\"{{ path('login') }}\">Se connecter</a></li>
              <li><a class=\"dropdown-item\" href=\"{{ path('register') }}\">S'inscrire</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>", "partials/header.html.twig", "C:\\Ecoride symfony\\my_project\\templates\\partials\\header.html.twig");
    }
}
