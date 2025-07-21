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

/* home/homepage.html.twig */
class __TwigTemplate_5f975d2f1a86eb2b2ef571006003762e extends Template
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

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'body' => [$this, 'block_body'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doGetParent(array $context): bool|string|Template|TemplateWrapper
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "home/homepage.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "home/homepage.html.twig"));

        $this->parent = $this->load("base.html.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_title(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        yield "Ecoride Homepage";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 5
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_stylesheets(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 6
        yield "    ";
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("app");
        yield "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 9
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_body(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 10
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 10, $this->source); })()), 'form_start', ["attr" => ["class" => "p-4 rounded", "id" => "search"], "method" => "GET", "action" => $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("trip_resultat")]);
        // line 14
        yield "
<div class=\"test-custom-color\">Test Main Color</div>
<p class=\"text-center fs-4\">Itinéraire</p>

<div class=\"row depart mb-3\">
  <div class=\"col-md-5\">
    <datalist id=\"cities\">
        ";
        // line 21
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable((isset($context["cities"]) || array_key_exists("cities", $context) ? $context["cities"] : (function () { throw new RuntimeError('Variable "cities" does not exist.', 21, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["city"]) {
            // line 22
            yield "            <option value=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["city"], "html", null, true);
            yield "\">
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['city'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 24
        yield "    </datalist>

    ";
        // line 26
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 26, $this->source); })()), "villeDepart", [], "any", false, false, false, 26), 'row', ["attr" => ["list" => "cities", "class" => "form-control fs-4", "placeholder" => "Ville de départ", "id" => "villeDepart"], "label_attr" => ["class" => "form-label fs-5"]]);
        // line 34
        yield "
    <span id=\"error-villeDepart\" class=\"error-message text-danger fs-6\"></span>
  </div>

  <div class=\"col-md-2 d-flex justify-content-center align-items-center\">
    <button class=\"btn btn-complementary-color\" id=\"arrow\" type=\"button\" aria-label=\"Échanger villes\">
      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-down-up\" viewBox=\"0 0 16 16\">
        <path fill-rule=\"evenodd\" d=\"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5\"/>
      </svg>
    </button>
  </div>

  <div class=\"col-md-5\">
    ";
        // line 47
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 47, $this->source); })()), "villeArrivee", [], "any", false, false, false, 47), 'row', ["attr" => ["class" => "form-control fs-4", "placeholder" => "Ville d'arrivée", "id" => "villeArrivee"], "label_attr" => ["class" => "form-label fs-5"]]);
        // line 54
        yield "
    <span id=\"error-villeArrivee\" class=\"error-message text-danger fs-6\"></span>
  </div>
</div>

<div class=\"row mb-3\">
  <div class=\"col-md-6\">
    ";
        // line 61
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 61, $this->source); })()), "dateDepart", [], "any", false, false, false, 61), 'row', ["attr" => ["class" => "form-control fs-4", "placeholder" => "Date de départ", "id" => "dateDepart"], "label_attr" => ["class" => "form-label fs-5"]]);
        // line 68
        yield "
    <span id=\"error-dateDepart\" class=\"error-message text-danger fs-6\"></span>
  </div>
  <div class=\"col-md-6\">
    ";
        // line 72
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 72, $this->source); })()), "dateArrivee", [], "any", false, false, false, 72), 'row', ["attr" => ["class" => "form-control fs-4", "placeholder" => "Date d'arrivée", "id" => "dateArrivee"], "label_attr" => ["class" => "form-label fs-5"]]);
        // line 79
        yield "
    <span id=\"error-dateArrivee\" class=\"error-message text-danger fs-6\"></span>
  </div>
</div>

<div class=\"row mb-3\">
  <div class=\"col-md-12\">
    ";
        // line 86
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 86, $this->source); })()), "nombrePassagers", [], "any", false, false, false, 86), 'row', ["attr" => ["class" => "form-control fs-4", "id" => "passengers"], "label_attr" => ["class" => "form-label fs-5"]]);
        // line 92
        yield "
    <span id=\"error-passengers\" class=\"error-message text-danger fs-6\"></span>
  </div>
</div>

<div class=\"row mt-4\">
  <div class=\"col-md-12 d-flex justify-content-center\">
    <button type=\"submit\" class=\"btn btn-complementary-color fs-5\" id=\"submit\" aria-label=\"Rechercher un trajet\">Rechercher</button>
  </div>
</div>

";
        // line 103
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 103, $this->source); })()), 'form_end');
        yield "

<!-- Description text et images -->
<section aria-label=\"Description et images\">
  <!-- Description 1 -->
  <div class=\"row align-items-center my-5\">
    <div class=\"col-md-6 Descriptiontext\">
      <p class=\"fs-4\">Ecoride est une plateforme de covoiturage dédiée à la protection de notre planète. Nous encourageons des trajets partagés, réduisant ainsi l’empreinte carbone de chacun. Notre priorité est de privilégier les voitures électriques pour un transport plus propre et plus respectueux de l’environnement. Ensemble, contribuons à préserver la santé de la Terre tout en voyageant malin. Rejoignez Ecoride et faites le choix d’un avenir durable !
      </p>
    </div>
    <div class=\"col-md-6 Descriptionimage\">
      <img src=\"";
        // line 114
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("Image/Green1.jpg"), "html", null, true);
        yield "\" alt=\"Car\" class=\"img-fluid rounded\" id=\"image1\">        
    </div>
  </div>
  <!-- Description 2 -->
  <div class=\"row align-items-center my-5\">
    <div class=\"col-md-6 Descriptionimage\">
      <img src=\"";
        // line 120
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("Image/Green2.jpg"), "html", null, true);
        yield "\" alt=\"Car\" class=\"img-fluid rounded\" id=\"image2\">        
    </div>
    <div class=\"col-md-6 Descriptiontext\">
      <p class=\"fs-4\">Pour cela, Ecoride met à votre disposition un réseau simple et efficace favorisant les déplacements en voitures électriques. Chaque trajet partagé permet de réduire les émissions polluantes et d’encourager une mobilité plus responsable. En choisissant Ecoride, vous devenez acteur du changement et participez à la construction d’un futur plus vert. Engageons-nous ensemble pour un monde où voyager rime avec respect de la nature.
      </p>
    </div>
  </div>
</section>

";
        // line 129
        yield from $this->unwrap()->yieldBlock('javascripts', $context, $blocks);
        // line 133
        yield "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 129
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_javascripts(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 130
        yield "    ";
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("Homepage");
        yield "
    ";
        // line 131
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("app");
        yield "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "home/homepage.html.twig";
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
        return array (  286 => 131,  281 => 130,  268 => 129,  256 => 133,  254 => 129,  242 => 120,  233 => 114,  219 => 103,  206 => 92,  204 => 86,  195 => 79,  193 => 72,  187 => 68,  185 => 61,  176 => 54,  174 => 47,  159 => 34,  157 => 26,  153 => 24,  144 => 22,  140 => 21,  131 => 14,  129 => 10,  116 => 9,  102 => 6,  89 => 5,  66 => 3,  43 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Ecoride Homepage{% endblock %}

{% block stylesheets %}
    {{ encore_entry_link_tags('app') }}
{% endblock %}

{% block body %}
{{ form_start(form, { 
    'attr': { 'class': 'p-4 rounded', 'id': 'search' },
    'method': 'GET', 
    'action': path('trip_resultat') 
}) }}
<div class=\"test-custom-color\">Test Main Color</div>
<p class=\"text-center fs-4\">Itinéraire</p>

<div class=\"row depart mb-3\">
  <div class=\"col-md-5\">
    <datalist id=\"cities\">
        {% for city in cities %}
            <option value=\"{{ city }}\">
        {% endfor %}
    </datalist>

    {{ form_row(form.villeDepart, { 
        'attr': {
          'list': 'cities', 
          'class': 'form-control fs-4', 
          'placeholder': 'Ville de départ', 
          'id': 'villeDepart'
        },
        'label_attr': {'class': 'form-label fs-5'}
    }) }}
    <span id=\"error-villeDepart\" class=\"error-message text-danger fs-6\"></span>
  </div>

  <div class=\"col-md-2 d-flex justify-content-center align-items-center\">
    <button class=\"btn btn-complementary-color\" id=\"arrow\" type=\"button\" aria-label=\"Échanger villes\">
      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-down-up\" viewBox=\"0 0 16 16\">
        <path fill-rule=\"evenodd\" d=\"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5\"/>
      </svg>
    </button>
  </div>

  <div class=\"col-md-5\">
    {{ form_row(form.villeArrivee, { 
        'attr': {
          'class': 'form-control fs-4', 
          'placeholder': \"Ville d'arrivée\", 
          'id': 'villeArrivee'
        },
        'label_attr': {'class': 'form-label fs-5'}
    }) }}
    <span id=\"error-villeArrivee\" class=\"error-message text-danger fs-6\"></span>
  </div>
</div>

<div class=\"row mb-3\">
  <div class=\"col-md-6\">
    {{ form_row(form.dateDepart, {
      'attr': {
        'class': 'form-control fs-4',
        'placeholder': 'Date de départ',
        'id': 'dateDepart'
      },
      'label_attr': {'class': 'form-label fs-5'}
    }) }}
    <span id=\"error-dateDepart\" class=\"error-message text-danger fs-6\"></span>
  </div>
  <div class=\"col-md-6\">
    {{ form_row(form.dateArrivee, {
      'attr': {
        'class': 'form-control fs-4',
        'placeholder': 'Date d\\'arrivée',
        'id': 'dateArrivee'
      },
      'label_attr': {'class': 'form-label fs-5'}
    }) }}
    <span id=\"error-dateArrivee\" class=\"error-message text-danger fs-6\"></span>
  </div>
</div>

<div class=\"row mb-3\">
  <div class=\"col-md-12\">
    {{ form_row(form.nombrePassagers, {
      'attr': {
        'class': 'form-control fs-4',
        'id': 'passengers'
      },
      'label_attr': {'class': 'form-label fs-5'}
    }) }}
    <span id=\"error-passengers\" class=\"error-message text-danger fs-6\"></span>
  </div>
</div>

<div class=\"row mt-4\">
  <div class=\"col-md-12 d-flex justify-content-center\">
    <button type=\"submit\" class=\"btn btn-complementary-color fs-5\" id=\"submit\" aria-label=\"Rechercher un trajet\">Rechercher</button>
  </div>
</div>

{{ form_end(form) }}

<!-- Description text et images -->
<section aria-label=\"Description et images\">
  <!-- Description 1 -->
  <div class=\"row align-items-center my-5\">
    <div class=\"col-md-6 Descriptiontext\">
      <p class=\"fs-4\">Ecoride est une plateforme de covoiturage dédiée à la protection de notre planète. Nous encourageons des trajets partagés, réduisant ainsi l’empreinte carbone de chacun. Notre priorité est de privilégier les voitures électriques pour un transport plus propre et plus respectueux de l’environnement. Ensemble, contribuons à préserver la santé de la Terre tout en voyageant malin. Rejoignez Ecoride et faites le choix d’un avenir durable !
      </p>
    </div>
    <div class=\"col-md-6 Descriptionimage\">
      <img src=\"{{ asset('Image/Green1.jpg') }}\" alt=\"Car\" class=\"img-fluid rounded\" id=\"image1\">        
    </div>
  </div>
  <!-- Description 2 -->
  <div class=\"row align-items-center my-5\">
    <div class=\"col-md-6 Descriptionimage\">
      <img src=\"{{ asset('Image/Green2.jpg') }}\" alt=\"Car\" class=\"img-fluid rounded\" id=\"image2\">        
    </div>
    <div class=\"col-md-6 Descriptiontext\">
      <p class=\"fs-4\">Pour cela, Ecoride met à votre disposition un réseau simple et efficace favorisant les déplacements en voitures électriques. Chaque trajet partagé permet de réduire les émissions polluantes et d’encourager une mobilité plus responsable. En choisissant Ecoride, vous devenez acteur du changement et participez à la construction d’un futur plus vert. Engageons-nous ensemble pour un monde où voyager rime avec respect de la nature.
      </p>
    </div>
  </div>
</section>

{% block javascripts %}
    {{ encore_entry_script_tags('Homepage') }}
    {{ encore_entry_script_tags('app') }}
{% endblock %}

{% endblock %}

", "home/homepage.html.twig", "C:\\Ecoride_symfony\\templates\\home\\homepage.html.twig");
    }
}
