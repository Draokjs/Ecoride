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

/* espace/mon_espace.html.twig */
class __TwigTemplate_dd161655d8e5924d02c4d97b690a2ac4 extends Template
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
            'body' => [$this, 'block_body'],
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "espace/mon_espace.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "espace/mon_espace.html.twig"));

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

        yield "Mon Espace";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 5
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

        // line 6
        yield "<h1>Bienvenue dans Mon Espace</h1>

";
        // line 8
        if ((($tmp = (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 8, $this->source); })())) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 9
            yield "    <p><strong>Email :</strong> ";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 9, $this->source); })()), "email", [], "any", false, false, false, 9), "html", null, true);
            yield "</p>
    <p><strong>Nom :</strong> ";
            // line 10
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 10, $this->source); })()), "nom", [], "any", false, false, false, 10), "html", null, true);
            yield "</p>
    <p><strong>Prénom :</strong> ";
            // line 11
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 11, $this->source); })()), "prenom", [], "any", false, false, false, 11), "html", null, true);
            yield "</p>
    <p><strong>Username :</strong> ";
            // line 12
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 12, $this->source); })()), "username", [], "any", false, false, false, 12), "html", null, true);
            yield "</p>
    <p><strong>Téléphone :</strong> ";
            // line 13
            yield (((CoreExtension::getAttribute($this->env, $this->source, ($context["user"] ?? null), "telephone", [], "any", true, true, false, 13) &&  !(null === CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 13, $this->source); })()), "telephone", [], "any", false, false, false, 13)))) ? ($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 13, $this->source); })()), "telephone", [], "any", false, false, false, 13), "html", null, true)) : ("Non renseigné"));
            yield "</p>
    <p><strong>Adresse :</strong> ";
            // line 14
            yield (((CoreExtension::getAttribute($this->env, $this->source, ($context["user"] ?? null), "adresse", [], "any", true, true, false, 14) &&  !(null === CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 14, $this->source); })()), "adresse", [], "any", false, false, false, 14)))) ? ($this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 14, $this->source); })()), "adresse", [], "any", false, false, false, 14), "html", null, true)) : ("Non renseignée"));
            yield "</p>
    <p><strong>Date de naissance :</strong> 
        ";
            // line 16
            if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 16, $this->source); })()), "dateNaissance", [], "any", false, false, false, 16)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                // line 17
                yield "            ";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 17, $this->source); })()), "dateNaissance", [], "any", false, false, false, 17), "d/m/Y"), "html", null, true);
                yield "
        ";
            } else {
                // line 19
                yield "            Non renseignée
        ";
            }
            // line 21
            yield "    </p>

    ";
            // line 23
            if ((($tmp = (isset($context["photoBase64"]) || array_key_exists("photoBase64", $context) ? $context["photoBase64"] : (function () { throw new RuntimeError('Variable "photoBase64" does not exist.', 23, $this->source); })())) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                // line 24
                yield "        <p><strong>Photo de profil :</strong></p>
        <img src=\"data:image/jpeg;base64,";
                // line 25
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["photoBase64"]) || array_key_exists("photoBase64", $context) ? $context["photoBase64"] : (function () { throw new RuntimeError('Variable "photoBase64" does not exist.', 25, $this->source); })()), "html", null, true);
                yield "\" alt=\"Photo de profil\" width=\"150\">
    ";
            }
            // line 27
            yield "    
";
        } else {
            // line 29
            yield "    <p>Vous n'êtes pas connecté. <a href=\"";
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_login");
            yield "\">Connectez-vous ici</a>.</p>
";
        }
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "espace/mon_espace.html.twig";
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
        return array (  162 => 29,  158 => 27,  153 => 25,  150 => 24,  148 => 23,  144 => 21,  140 => 19,  134 => 17,  132 => 16,  127 => 14,  123 => 13,  119 => 12,  115 => 11,  111 => 10,  106 => 9,  104 => 8,  100 => 6,  87 => 5,  64 => 3,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Mon Espace{% endblock %}

{% block body %}
<h1>Bienvenue dans Mon Espace</h1>

{% if user %}
    <p><strong>Email :</strong> {{ user.email }}</p>
    <p><strong>Nom :</strong> {{ user.nom }}</p>
    <p><strong>Prénom :</strong> {{ user.prenom }}</p>
    <p><strong>Username :</strong> {{ user.username }}</p>
    <p><strong>Téléphone :</strong> {{ user.telephone ?? 'Non renseigné' }}</p>
    <p><strong>Adresse :</strong> {{ user.adresse ?? 'Non renseignée' }}</p>
    <p><strong>Date de naissance :</strong> 
        {% if user.dateNaissance %}
            {{ user.dateNaissance|date('d/m/Y') }}
        {% else %}
            Non renseignée
        {% endif %}
    </p>

    {% if photoBase64 %}
        <p><strong>Photo de profil :</strong></p>
        <img src=\"data:image/jpeg;base64,{{ photoBase64 }}\" alt=\"Photo de profil\" width=\"150\">
    {% endif %}
    
{% else %}
    <p>Vous n'êtes pas connecté. <a href=\"{{ path('app_login') }}\">Connectez-vous ici</a>.</p>
{% endif %}
{% endblock %}

", "espace/mon_espace.html.twig", "C:\\Ecoride_symfony\\templates\\espace\\mon_espace.html.twig");
    }
}
