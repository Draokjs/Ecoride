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

/* trip/resultat.html.twig */
class __TwigTemplate_1cd162cc651b83e8116d10048a5aee93 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "trip/resultat.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "trip/resultat.html.twig"));

        $this->parent = $this->load("base.html.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
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

        // line 4
        yield "<div class=\"container my-5\">

  <h2 class=\"mb-4\" id=\"result-title\">Résultats :</h2>

  ";
        // line 8
        if (Twig\Extension\CoreExtension::testEmpty((isset($context["trips"]) || array_key_exists("trips", $context) ? $context["trips"] : (function () { throw new RuntimeError('Variable "trips" does not exist.', 8, $this->source); })()))) {
            // line 9
            yield "    <p>Aucun trajet trouvé.</p>
  ";
        } else {
            // line 11
            yield "    <ul>
      ";
            // line 12
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable((isset($context["trips"]) || array_key_exists("trips", $context) ? $context["trips"] : (function () { throw new RuntimeError('Variable "trips" does not exist.', 12, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["trip"]) {
                // line 13
                yield "        <li>";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["trip"], "villeDepart", [], "any", false, false, false, 13), "html", null, true);
                yield " → ";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["trip"], "villeArrivee", [], "any", false, false, false, 13), "html", null, true);
                yield " le ";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, $context["trip"], "dateDepart", [], "any", false, false, false, 13), "d/m/Y"), "html", null, true);
                yield "</li>
      ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['trip'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 15
            yield "    </ul>
  ";
        }
        // line 17
        yield "
  <div class=\"mb-4\">
    <p id=\"valuedeparture\" class=\"lead\"></p>
    <p id=\"datedeparture\" class=\"lead\"></p>
    <div id=\"tripresultdate\" class=\"alert alert-primary\" role=\"alert\"></div>
    <p id=\"tripstart\" class=\"lead\"></p>
    <p id=\"tripend\" class=\"lead\"></p>
    <p id=\"triplength\" class=\"lead\"></p>
  </div>
  
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 29
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

        // line 30
        if ((($tmp =  !array_key_exists("search", $context)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 31
            yield "  <script>console.error(\"Variable 'search' manquante dans Twig.\");</script>
";
        }
        // line 33
        yield "<script>
 window.searchData = {
    departure: \"";
        // line 35
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["search"]) || array_key_exists("search", $context) ? $context["search"] : (function () { throw new RuntimeError('Variable "search" does not exist.', 35, $this->source); })()), "villeDepart", [], "any", false, false, false, 35), "js"), "html", null, true);
        yield "\",
    arrival: \"";
        // line 36
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["search"]) || array_key_exists("search", $context) ? $context["search"] : (function () { throw new RuntimeError('Variable "search" does not exist.', 36, $this->source); })()), "villeArrivee", [], "any", false, false, false, 36), "js"), "html", null, true);
        yield "\",
    dateDeparture: \"";
        // line 37
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["search"]) || array_key_exists("search", $context) ? $context["search"] : (function () { throw new RuntimeError('Variable "search" does not exist.', 37, $this->source); })()), "dateDepart", [], "any", false, false, false, 37), "html", null, true);
        yield "\",
    dateArrivee: \"";
        // line 38
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["search"]) || array_key_exists("search", $context) ? $context["search"] : (function () { throw new RuntimeError('Variable "search" does not exist.', 38, $this->source); })()), "dateArrivee", [], "any", false, false, false, 38), "html", null, true);
        yield "\",
    numberOfPassengers: ";
        // line 39
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(((CoreExtension::getAttribute($this->env, $this->source, ($context["search"] ?? null), "nombrePassagers", [], "any", true, true, false, 39)) ? (Twig\Extension\CoreExtension::default(CoreExtension::getAttribute($this->env, $this->source, (isset($context["search"]) || array_key_exists("search", $context) ? $context["search"] : (function () { throw new RuntimeError('Variable "search" does not exist.', 39, $this->source); })()), "nombrePassagers", [], "any", false, false, false, 39), 0)) : (0)), "html", null, true);
        yield "
};
</script>
<script src=\"";
        // line 42
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("js/Resultat.js"), "html", null, true);
        yield "\"></script>
<script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js\"></script>
<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js\"></script>
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
        return "trip/resultat.html.twig";
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
        return array (  179 => 42,  173 => 39,  169 => 38,  165 => 37,  161 => 36,  157 => 35,  153 => 33,  149 => 31,  147 => 30,  134 => 29,  113 => 17,  109 => 15,  96 => 13,  92 => 12,  89 => 11,  85 => 9,  83 => 8,  77 => 4,  64 => 3,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block body %}
<div class=\"container my-5\">

  <h2 class=\"mb-4\" id=\"result-title\">Résultats :</h2>

  {% if trips is empty %}
    <p>Aucun trajet trouvé.</p>
  {% else %}
    <ul>
      {% for trip in trips %}
        <li>{{ trip.villeDepart }} → {{ trip.villeArrivee }} le {{ trip.dateDepart|date('d/m/Y') }}</li>
      {% endfor %}
    </ul>
  {% endif %}

  <div class=\"mb-4\">
    <p id=\"valuedeparture\" class=\"lead\"></p>
    <p id=\"datedeparture\" class=\"lead\"></p>
    <div id=\"tripresultdate\" class=\"alert alert-primary\" role=\"alert\"></div>
    <p id=\"tripstart\" class=\"lead\"></p>
    <p id=\"tripend\" class=\"lead\"></p>
    <p id=\"triplength\" class=\"lead\"></p>
  </div>
  
{% endblock %}

{% block javascripts %}
{% if search is not defined %}
  <script>console.error(\"Variable 'search' manquante dans Twig.\");</script>
{% endif %}
<script>
 window.searchData = {
    departure: \"{{ search.villeDepart|e('js') }}\",
    arrival: \"{{ search.villeArrivee|e('js') }}\",
    dateDeparture: \"{{ search.dateDepart }}\",
    dateArrivee: \"{{ search.dateArrivee }}\",
    numberOfPassengers: {{ search.nombrePassagers|default(0) }}
};
</script>
<script src=\"{{ asset('js/Resultat.js') }}\"></script>
<script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js\"></script>
<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js\"></script>
{% endblock %}

", "trip/resultat.html.twig", "C:\\Ecoride_symfony\\templates\\trip\\resultat.html.twig");
    }
}
