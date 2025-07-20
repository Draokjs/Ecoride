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

  <div class=\"mb-4\">
    <p id=\"valuedeparture\" class=\"lead\"></p>
    <p id=\"datedeparture\" class=\"lead\"></p>
    <div id=\"tripresultdate\" class=\"alert alert-primary\" role=\"alert\"></div>
    <p id=\"tripstart\" class=\"lead\"></p>
    <p id=\"tripend\" class=\"lead\"></p>
    <p id=\"triplength\" class=\"lead\"></p>
  </div>

  ";
        // line 17
        if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 17, $this->source); })()), "session", [], "any", false, false, false, 17), "flashbag", [], "any", false, false, false, 17), "has", ["success"], "method", false, false, false, 17)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 18
            yield "    <div class=\"alert alert-success\">
      ";
            // line 19
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 19, $this->source); })()), "session", [], "any", false, false, false, 19), "flashbag", [], "any", false, false, false, 19), "get", ["success"], "method", false, false, false, 19), 0, [], "array", false, false, false, 19), "html", null, true);
            yield "
    </div>
  ";
        }
        // line 22
        yield "
  ";
        // line 23
        if ((($tmp =  !Twig\Extension\CoreExtension::testEmpty((isset($context["trips"]) || array_key_exists("trips", $context) ? $context["trips"] : (function () { throw new RuntimeError('Variable "trips" does not exist.', 23, $this->source); })()))) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 24
            yield "    <ul class=\"list-group\">
      ";
            // line 25
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable((isset($context["trips"]) || array_key_exists("trips", $context) ? $context["trips"] : (function () { throw new RuntimeError('Variable "trips" does not exist.', 25, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["trip"]) {
                // line 26
                yield "        <li class=\"list-group-item\">
          <strong>";
                // line 27
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["trip"], "villeDepart", [], "any", false, false, false, 27), "html", null, true);
                yield "</strong> → <strong>";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["trip"], "villeArrivee", [], "any", false, false, false, 27), "html", null, true);
                yield "</strong><br>
          Départ : ";
                // line 28
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, $context["trip"], "dateDepart", [], "any", false, false, false, 28), "d/m/Y"), "html", null, true);
                yield "<br>
          Arrivée : ";
                // line 29
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, $context["trip"], "dateArrivee", [], "any", false, false, false, 29), "d/m/Y"), "html", null, true);
                yield "<br>
          Places disponibles : ";
                // line 30
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["trip"], "nombrePassagers", [], "any", false, false, false, 30), "html", null, true);
                yield "
        </li>
      ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['trip'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 33
            yield "    </ul>
  ";
        } else {
            // line 35
            yield "    <div class=\"alert alert-warning mt-4\">Aucun trajet trouvé avec ces critères.</div>
  ";
        }
        // line 37
        yield "</div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 40
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

        // line 41
        yield "<script>
  window.searchData = ";
        // line 42
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Twig\Extension\CoreExtension::default(json_encode((isset($context["search"]) || array_key_exists("search", $context) ? $context["search"] : (function () { throw new RuntimeError('Variable "search" does not exist.', 42, $this->source); })())), "{}"), "html", null, true);
        yield ";
</script>
<script src=\"";
        // line 44
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
        return array (  182 => 44,  177 => 42,  174 => 41,  161 => 40,  149 => 37,  145 => 35,  141 => 33,  132 => 30,  128 => 29,  124 => 28,  118 => 27,  115 => 26,  111 => 25,  108 => 24,  106 => 23,  103 => 22,  97 => 19,  94 => 18,  92 => 17,  77 => 4,  64 => 3,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block body %}
<div class=\"container my-5\">

  <h2 class=\"mb-4\" id=\"result-title\">Résultats :</h2>

  <div class=\"mb-4\">
    <p id=\"valuedeparture\" class=\"lead\"></p>
    <p id=\"datedeparture\" class=\"lead\"></p>
    <div id=\"tripresultdate\" class=\"alert alert-primary\" role=\"alert\"></div>
    <p id=\"tripstart\" class=\"lead\"></p>
    <p id=\"tripend\" class=\"lead\"></p>
    <p id=\"triplength\" class=\"lead\"></p>
  </div>

  {% if app.session.flashbag.has('success') %}
    <div class=\"alert alert-success\">
      {{ app.session.flashbag.get('success')[0] }}
    </div>
  {% endif %}

  {% if trips is not empty %}
    <ul class=\"list-group\">
      {% for trip in trips %}
        <li class=\"list-group-item\">
          <strong>{{ trip.villeDepart }}</strong> → <strong>{{ trip.villeArrivee }}</strong><br>
          Départ : {{ trip.dateDepart|date('d/m/Y') }}<br>
          Arrivée : {{ trip.dateArrivee|date('d/m/Y') }}<br>
          Places disponibles : {{ trip.nombrePassagers }}
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <div class=\"alert alert-warning mt-4\">Aucun trajet trouvé avec ces critères.</div>
  {% endif %}
</div>
{% endblock %}

{% block javascripts %}
<script>
  window.searchData = {{ search|json_encode|raw|default('{}') }};
</script>
<script src=\"{{ asset('js/Resultat.js') }}\"></script>
<script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js\"></script>
<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js\"></script>
{% endblock %}
", "trip/resultat.html.twig", "C:\\Ecoride_symfony\\templates\\trip\\resultat.html.twig");
    }
}
