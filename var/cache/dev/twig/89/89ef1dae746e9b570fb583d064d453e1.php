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
class __TwigTemplate_800085d45569b31e309ea8afc336545d extends Template
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
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 10, $this->source); })()), 'form_start', ["attr" => ["class" => "p-4 rounded", "id" => "search"], "method" => "GET", "action" => $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("resultat")]);
        // line 14
        yield "
<div class=\"test-custom-color\">Test Main Color</div>
<p class=\"text-center fs-4\">Itinéraire</p>

<div class=\"row depart mb-3\">
  <div class=\"col-md-5\">
    <input list=\"cities\" name=\"villeDepart\" id=\"villeDepart\" class=\"form-control fs-4\" placeholder=\"Ville de départ\" />
    <datalist id=\"cities\">
        ";
        // line 22
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable((isset($context["cities"]) || array_key_exists("cities", $context) ? $context["cities"] : (function () { throw new RuntimeError('Variable "cities" does not exist.', 22, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["city"]) {
            // line 23
            yield "            <option value=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["city"], "html", null, true);
            yield "\">
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['city'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 25
        yield "    </datalist>
  </div>

  <div class=\"col-md-2 d-flex justify-content-center align-items-center\">
    <button class=\"btn btn-complementary-color\" id=\"arrow\" type=\"button\">
      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-down-up\" viewBox=\"0 0 16 16\">
        <path fill-rule=\"evenodd\" d=\"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5\"/>
      </svg>
    </button>
  </div>

  <div class=\"col-md-5\">
    ";
        // line 37
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 37, $this->source); })()), "Ville_arrivee", [], "any", false, false, false, 37), 'row', ["attr" => ["class" => "form-control fs-4", "placeholder" => "Ville d'arrivée"], "label_attr" => ["class" => "form-label fs-5"]]);
        yield "
  </div>
</div>

<div class=\"row mb-3\">
  <div class=\"col-md-6\">
    ";
        // line 43
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 43, $this->source); })()), "date_depart", [], "any", false, false, false, 43), 'row', ["attr" => ["class" => "form-control fs-4", "placeholder" => "Date de départ"], "label_attr" => ["class" => "form-label fs-5"]]);
        yield "
  </div>
  <div class=\"col-md-6\">
    ";
        // line 46
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 46, $this->source); })()), "date_arrivee", [], "any", false, false, false, 46), 'row', ["attr" => ["class" => "form-control fs-4", "placeholder" => "Date d'arrivée"], "label_attr" => ["class" => "form-label fs-5"]]);
        yield "
  </div>
</div>

<div class=\"row mb-3\">
  <div class=\"col-md-12\">
    ";
        // line 52
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 52, $this->source); })()), "nombre_passagers", [], "any", false, false, false, 52), 'row', ["attr" => ["class" => "form-control fs-4"], "label_attr" => ["class" => "form-label fs-5"]]);
        yield "
  </div>
</div>

<div class=\"row mt-4\">
  <div class=\"col-md-12 d-flex justify-content-center\">
    <button type=\"submit\" class=\"btn btn-complementary-color fs-5\" id=\"submit\" aria-label=\"Rechercher un trajet\">Rechercher</button>
  </div>
</div>

";
        // line 62
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 62, $this->source); })()), 'form_end');
        yield "

<!-- Description text et images -->
<section aria-label=\"Description et images\">
  <!-- Description 1 -->
  <div class=\"row align-items-center my-5\">
    <div class=\"col-md-6 Descriptiontext\">
      <p class=\"fs-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur beatae veniam? Illum quidem molestias est corporis, unde delectus amet! Vel cumque maxime alias vero cum. Veritatis, modi. Deleniti, eligendi?
      </p>
    </div>
    <div class=\"col-md-6 Descriptionimage\">
      <img src=\"";
        // line 73
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("Image/Green1.jpg"), "html", null, true);
        yield "\" alt=\"Car\" class=\"img-fluid rounded\" id=\"image1\">        
    </div>
  </div>
  <!-- Description 2 -->
  <div class=\"row align-items-center my-5\">
    <div class=\"col-md-6 Descriptionimage\">
      <img src=\"";
        // line 79
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("Image/Green2.jpg"), "html", null, true);
        yield "\" alt=\"Car\" class=\"img-fluid rounded\" id=\"image2\">        
    </div>
    <div class=\"col-md-6 Descriptiontext\">
      <p class=\"fs-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur beatae veniam? Illum quidem molestias est corporis, unde delectus amet! Vel cumque maxime alias vero cum. Veritatis, modi. Deleniti, eligendi?
      </p>
    </div>
  </div>
</section>

";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 90
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

        // line 91
        yield "    ";
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
        return array (  262 => 91,  249 => 90,  228 => 79,  219 => 73,  205 => 62,  192 => 52,  183 => 46,  177 => 43,  168 => 37,  154 => 25,  145 => 23,  141 => 22,  131 => 14,  129 => 10,  116 => 9,  102 => 6,  89 => 5,  66 => 3,  43 => 1,);
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
    'action': path('resultat') 
}) }}
<div class=\"test-custom-color\">Test Main Color</div>
<p class=\"text-center fs-4\">Itinéraire</p>

<div class=\"row depart mb-3\">
  <div class=\"col-md-5\">
    <input list=\"cities\" name=\"villeDepart\" id=\"villeDepart\" class=\"form-control fs-4\" placeholder=\"Ville de départ\" />
    <datalist id=\"cities\">
        {% for city in cities %}
            <option value=\"{{ city }}\">
        {% endfor %}
    </datalist>
  </div>

  <div class=\"col-md-2 d-flex justify-content-center align-items-center\">
    <button class=\"btn btn-complementary-color\" id=\"arrow\" type=\"button\">
      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-down-up\" viewBox=\"0 0 16 16\">
        <path fill-rule=\"evenodd\" d=\"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5\"/>
      </svg>
    </button>
  </div>

  <div class=\"col-md-5\">
    {{ form_row(form.Ville_arrivee, {'attr': {'class': 'form-control fs-4', 'placeholder': 'Ville d\\'arrivée'}, 'label_attr': {'class': 'form-label fs-5'}}) }}
  </div>
</div>

<div class=\"row mb-3\">
  <div class=\"col-md-6\">
    {{ form_row(form.date_depart, {'attr': {'class': 'form-control fs-4', 'placeholder': 'Date de départ'}, 'label_attr': {'class': 'form-label fs-5'}}) }}
  </div>
  <div class=\"col-md-6\">
    {{ form_row(form.date_arrivee, {'attr': {'class': 'form-control fs-4', 'placeholder': 'Date d\\'arrivée'}, 'label_attr': {'class': 'form-label fs-5'}}) }}
  </div>
</div>

<div class=\"row mb-3\">
  <div class=\"col-md-12\">
    {{ form_row(form.nombre_passagers, {'attr': {'class': 'form-control fs-4'}, 'label_attr': {'class': 'form-label fs-5'}}) }}
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
      <p class=\"fs-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur beatae veniam? Illum quidem molestias est corporis, unde delectus amet! Vel cumque maxime alias vero cum. Veritatis, modi. Deleniti, eligendi?
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
      <p class=\"fs-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur beatae veniam? Illum quidem molestias est corporis, unde delectus amet! Vel cumque maxime alias vero cum. Veritatis, modi. Deleniti, eligendi?
      </p>
    </div>
  </div>
</section>

{% endblock %}

{% block javascripts %}
    {{ encore_entry_script_tags('app') }}
{% endblock %}

", "home/homepage.html.twig", "C:\\Ecoride symfony\\my_project\\templates\\home\\homepage.html.twig");
    }
}
