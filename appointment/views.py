from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
from django.http import JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt

def index(request):
	return render(request, "appointment/index.html")

def information(request):
	return render(request, "appointment/information.html")

def confirmation(request):

	if request.method == "POST":
		first = request.POST["first_name"]
		last = request.POST["last_name"]
		email = request.POST["email"]
		code = request.POST["code"]
		number = request.POST["phone_number"]
		country = request.POST.getlist("country")
		country = ', '.join(country)
		company = request.POST["company"]
		objectives = request.POST["objectives"]
		description = request.POST["description"]

		send_mail(
			"Thank you for contancting DrugCatcher",
			f"We will get in touch soon\nYour info\nName: {first} {last}\nEmail: {email}\nPhone Number: +{code}{number}\nCountries Selected: {country}\nCompanies Selected: {company}\nObjectives: {objectives}\nDescription: {description}",
			"omar.amgad.omar@gmail.com",
			[email]
			)

		send_mail(
			"New appointment request",
			f"User info\nName: {first} {last}\nEmail: {email}\nPhone Number: +{code}{number}\nCountries Selected: {country}\nCompanies Selected: {company}\nObjectives: {objectives}\nDescription: {description}",
			"omar.amgad.omar@gmail.com",
			["omar.amgad.omar@gmail.com"]
			)

		return render(request, "appointment/confirmation.html")

@csrf_exempt
def companies(request, country, company):
	if request.method == "POST":
		try:
			co = Company.objects.get(company_name = company)
			return JsonResponse({"msg" : 'company already exists'}, status = 201)

		except Company.DoesNotExist:
			c = Company(company_name = company, country_name = country)
			c.save()
			return JsonResponse({"msg" : 'company added'}, status = 201)

	if request.method == "GET":
		cg = Company.objects.filter(country_name = country)
		return JsonResponse({"companies" : f'{cd}'}, status = 201)











