from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail

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
		country = request.POST["country"]
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