from django.urls import path
from . import views

urlpatterns = [
	path("", views.index, name = "index"),
	path("information", views.information, name= "information"),
	path("confirmation", views.confirmation, name= "confirmation"),
	path("companies/<str:country>/<str:company>", views.companies, name= "companies")
]