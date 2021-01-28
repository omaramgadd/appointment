from django.db import models

class Country(models.Model):
	country_name = models.TextField(max_length = 75, unique = True)

class Company(models.Model):
	company_name = models.TextField(max_length = 200)
	country_name = models.ForeignKey("Country", on_delete = models.CASCADE, to_field = "country_name")
