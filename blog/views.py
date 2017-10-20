from django.shortcuts import render

from django.views.generic import TemplateView
# Create your views here.


class HomeBlogView(TemplateView):
    template_name = "home_blog.html"


class MzTestView(TemplateView):
    template_name = "mz_test.html"


class PwebJqueryView(TemplateView):
    template_name = "pweb_jquery.html"


class PwebJquery2View(TemplateView):
    template_name = "pweb_jquery2.html"

class PwebEj1View(TemplateView):
    template_name = "pweb_ej1.html"

class PwebJquery3View(TemplateView):
    template_name = "pweb_jquery3.html"

class PwebJquery4View(TemplateView):
    template_name = "pweb_jquery4.html"

class PwebJquery5View(TemplateView):
    template_name = "pweb_jquery5.html"



class PwebCalculadora(TemplateView):
    template_name = "pweb_calculadora.html"


class PwebFormGen(TemplateView):
    template_name = "pweb_prueba2.html"
