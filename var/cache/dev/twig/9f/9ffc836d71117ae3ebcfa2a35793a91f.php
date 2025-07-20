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

/* security/register.html.twig */
class __TwigTemplate_d68eb7179ebbfea6fdcfb4d2669cd749 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/register.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/register.html.twig"));

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

        yield "Ecoride register page";
        
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
        yield "<div class=\"mt-5 bg-main-color rounded\" id= \"Registerform\">
    <h1 class=\"mb-4 text-center\">Inscription</h1>
    ";
        // line 12
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 12, $this->source); })()), "flashes", [], "any", false, false, false, 12));
        foreach ($context['_seq'] as $context["label"] => $context["messages"]) {
            // line 13
            yield "        ";
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable($context["messages"]);
            foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
                // line 14
                yield "            <div class=\"alert alert-";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["label"], "html", null, true);
                yield "\">";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["message"], "html", null, true);
                yield "</div>
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['message'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 16
            yield "    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['label'], $context['messages'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 17
        yield "    ";
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 17, $this->source); })()), 'form_start', ["method" => "POST", "attr" => ["enctype" => "multipart/form-data"]]);
        yield "
    <div class=\"mb-3\">
        ";
        // line 19
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 19, $this->source); })()), "nom", [], "any", false, false, false, 19), 'label');
        yield "
        ";
        // line 20
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 20, $this->source); })()), "nom", [], "any", false, false, false, 20), 'widget', ["attr" => ["class" => "form-control"]]);
        yield "
        ";
        // line 21
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 21, $this->source); })()), "nom", [], "any", false, false, false, 21), 'errors');
        yield "
    </div>

    <div class=\"mb-3\">
        ";
        // line 25
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 25, $this->source); })()), "prenom", [], "any", false, false, false, 25), 'label');
        yield "
        ";
        // line 26
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 26, $this->source); })()), "prenom", [], "any", false, false, false, 26), 'widget', ["attr" => ["class" => "form-control"]]);
        yield "
        ";
        // line 27
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 27, $this->source); })()), "prenom", [], "any", false, false, false, 27), 'errors');
        yield "
    </div>

    <div class=\"mb-3\">
        ";
        // line 31
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 31, $this->source); })()), "username", [], "any", false, false, false, 31), 'label');
        yield "
        ";
        // line 32
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 32, $this->source); })()), "username", [], "any", false, false, false, 32), 'widget', ["attr" => ["class" => "form-control"]]);
        yield "
        ";
        // line 33
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 33, $this->source); })()), "username", [], "any", false, false, false, 33), 'errors');
        yield "
    </div>

    <div class=\"mb-3\">
        ";
        // line 37
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 37, $this->source); })()), "email", [], "any", false, false, false, 37), 'label');
        yield "
        ";
        // line 38
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 38, $this->source); })()), "email", [], "any", false, false, false, 38), 'widget', ["attr" => ["class" => "form-control"]]);
        yield "
        ";
        // line 39
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 39, $this->source); })()), "email", [], "any", false, false, false, 39), 'errors');
        yield "
    </div>

    <div class=\"mb-3\">
        ";
        // line 43
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 43, $this->source); })()), "plainPassword", [], "any", false, false, false, 43), 'label');
        yield "
        ";
        // line 44
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 44, $this->source); })()), "plainPassword", [], "any", false, false, false, 44), 'widget', ["attr" => ["class" => "form-control"]]);
        yield "
        ";
        // line 45
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 45, $this->source); })()), "plainPassword", [], "any", false, false, false, 45), 'errors');
        yield "
    </div>

    <div class=\"mb-3\">
        ";
        // line 49
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 49, $this->source); })()), "telephone", [], "any", false, false, false, 49), 'label');
        yield "
        ";
        // line 50
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 50, $this->source); })()), "telephone", [], "any", false, false, false, 50), 'widget', ["attr" => ["class" => "form-control"]]);
        yield "
        ";
        // line 51
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 51, $this->source); })()), "telephone", [], "any", false, false, false, 51), 'errors');
        yield "
    </div>

    <div class=\"mb-3\">
        ";
        // line 55
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 55, $this->source); })()), "adresse", [], "any", false, false, false, 55), 'label');
        yield "
        ";
        // line 56
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 56, $this->source); })()), "adresse", [], "any", false, false, false, 56), 'widget', ["attr" => ["class" => "form-control", "rows" => "3"]]);
        yield "
        ";
        // line 57
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 57, $this->source); })()), "adresse", [], "any", false, false, false, 57), 'errors');
        yield "
    </div>

    <div class=\"mb-3\">
        ";
        // line 61
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 61, $this->source); })()), "date_naissance", [], "any", false, false, false, 61), 'label');
        yield "
        ";
        // line 62
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 62, $this->source); })()), "date_naissance", [], "any", false, false, false, 62), 'widget', ["attr" => ["class" => "form-control"]]);
        yield "
        ";
        // line 63
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 63, $this->source); })()), "date_naissance", [], "any", false, false, false, 63), 'errors');
        yield "
    </div>

    <div class=\"mb-3\">
        ";
        // line 67
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 67, $this->source); })()), "photo", [], "any", false, false, false, 67), 'label');
        yield "
        ";
        // line 68
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 68, $this->source); })()), "photo", [], "any", false, false, false, 68), 'widget', ["attr" => ["class" => "form-control"]]);
        yield "
        ";
        // line 69
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 69, $this->source); })()), "photo", [], "any", false, false, false, 69), 'errors');
        yield "
    </div>

   ";
        // line 72
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 72, $this->source); })()), "_token", [], "any", false, false, false, 72), 'row', ["attr" => ["data-controller" => "csrf-protection", "data-csrf-protection-cookie-value" => Twig\Extension\CoreExtension::slice($this->env->getCharset(), $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken("registration_form"), 0, 22)]]);
        // line 77
        yield "


    ";
        // line 80
        if ((($tmp = (isset($context["errors"]) || array_key_exists("errors", $context) ? $context["errors"] : (function () { throw new RuntimeError('Variable "errors" does not exist.', 80, $this->source); })())) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 81
            yield "        <ul>
        ";
            // line 82
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable((isset($context["errors"]) || array_key_exists("errors", $context) ? $context["errors"] : (function () { throw new RuntimeError('Variable "errors" does not exist.', 82, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["error"]) {
                // line 83
                yield "            <li>";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["error"], "html", null, true);
                yield "</li>
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['error'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 85
            yield "        </ul>
    ";
        }
        // line 87
        yield "
    <div class=\"d-flex justify-content-center\">
        <button type=\"submit\" class=\"btn btn-complementary-color w-50 fs-5\">S'inscrire</button>
    </div>

    ";
        // line 92
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 92, $this->source); })()), 'form_end', ["render_rest" => false]);
        yield "
</div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 95
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

        // line 96
        yield "    ";
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("app");
        yield "
    ";
        // line 97
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("csrf_protection_controller");
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
        return "security/register.html.twig";
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
        return array (  367 => 97,  362 => 96,  349 => 95,  335 => 92,  328 => 87,  324 => 85,  315 => 83,  311 => 82,  308 => 81,  306 => 80,  301 => 77,  299 => 72,  293 => 69,  289 => 68,  285 => 67,  278 => 63,  274 => 62,  270 => 61,  263 => 57,  259 => 56,  255 => 55,  248 => 51,  244 => 50,  240 => 49,  233 => 45,  229 => 44,  225 => 43,  218 => 39,  214 => 38,  210 => 37,  203 => 33,  199 => 32,  195 => 31,  188 => 27,  184 => 26,  180 => 25,  173 => 21,  169 => 20,  165 => 19,  159 => 17,  153 => 16,  142 => 14,  137 => 13,  133 => 12,  129 => 10,  116 => 9,  102 => 6,  89 => 5,  66 => 3,  43 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Ecoride register page{% endblock %}

{% block stylesheets %}
    {{ encore_entry_link_tags('app')}}
{% endblock %}

{% block body %}
<div class=\"mt-5 bg-main-color rounded\" id= \"Registerform\">
    <h1 class=\"mb-4 text-center\">Inscription</h1>
    {% for label, messages in app.flashes %}
        {% for message in messages %}
            <div class=\"alert alert-{{ label }}\">{{ message }}</div>
        {% endfor %}
    {% endfor %}
    {{ form_start(registrationForm, {'method': 'POST', 'attr': {'enctype': 'multipart/form-data'}}) }}
    <div class=\"mb-3\">
        {{ form_label(registrationForm.nom) }}
        {{ form_widget(registrationForm.nom, { attr: { class: 'form-control' } }) }}
        {{ form_errors(registrationForm.nom) }}
    </div>

    <div class=\"mb-3\">
        {{ form_label(registrationForm.prenom) }}
        {{ form_widget(registrationForm.prenom, { attr: { class: 'form-control' } }) }}
        {{ form_errors(registrationForm.prenom) }}
    </div>

    <div class=\"mb-3\">
        {{ form_label(registrationForm.username) }}
        {{ form_widget(registrationForm.username, { attr: { class: 'form-control' } }) }}
        {{ form_errors(registrationForm.username) }}
    </div>

    <div class=\"mb-3\">
        {{ form_label(registrationForm.email) }}
        {{ form_widget(registrationForm.email, { attr: { class: 'form-control' } }) }}
        {{ form_errors(registrationForm.email) }}
    </div>

    <div class=\"mb-3\">
        {{ form_label(registrationForm.plainPassword) }}
        {{ form_widget(registrationForm.plainPassword, { attr: { class: 'form-control' } }) }}
        {{ form_errors(registrationForm.plainPassword) }}
    </div>

    <div class=\"mb-3\">
        {{ form_label(registrationForm.telephone) }}
        {{ form_widget(registrationForm.telephone, { attr: { class: 'form-control' } }) }}
        {{ form_errors(registrationForm.telephone) }}
    </div>

    <div class=\"mb-3\">
        {{ form_label(registrationForm.adresse) }}
        {{ form_widget(registrationForm.adresse, { attr: { class: 'form-control', rows: '3' } }) }}
        {{ form_errors(registrationForm.adresse) }}
    </div>

    <div class=\"mb-3\">
        {{ form_label(registrationForm.date_naissance) }}
        {{ form_widget(registrationForm.date_naissance, { attr: { class: 'form-control' } }) }}
        {{ form_errors(registrationForm.date_naissance) }}
    </div>

    <div class=\"mb-3\">
        {{ form_label(registrationForm.photo) }}
        {{ form_widget(registrationForm.photo, { attr: { class: 'form-control' } }) }}
        {{ form_errors(registrationForm.photo) }}
    </div>

   {{ form_row(registrationForm._token, {
    attr: {
        'data-controller': 'csrf-protection',
        'data-csrf-protection-cookie-value': csrf_token('registration_form')|slice(0, 22)
    }
    }) }}


    {% if errors %}
        <ul>
        {% for error in errors %}
            <li>{{ error }}</li>
        {% endfor %}
        </ul>
    {% endif %}

    <div class=\"d-flex justify-content-center\">
        <button type=\"submit\" class=\"btn btn-complementary-color w-50 fs-5\">S'inscrire</button>
    </div>

    {{ form_end(registrationForm, {'render_rest': false}) }}
</div>
{% endblock %}
{% block javascripts %}
    {{ encore_entry_script_tags('app') }}
    {{ encore_entry_script_tags('csrf_protection_controller') }}
{% endblock %}

", "security/register.html.twig", "C:\\Ecoride_symfony\\templates\\security\\register.html.twig");
    }
}
