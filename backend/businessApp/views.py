from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import BusinessReview

@csrf_exempt
def createBusinessReview(request):
    if request.method != "POST":
        return JsonResponse(
            {"error": "Only POST method allowed"},
            status=405
        )

    try:
        data = json.loads(request.body)

        Uname = data.get("uname")
        Uemail = data.get("uemail")
        Urating = data.get("urating")
        Ureview = data.get("ureview")

        if not all([Uname, Uemail, Urating, Ureview]):
            return JsonResponse(
                {"error": "All fields are required"},
                status=400
            )

        BusinessReview.objects.create(
            uname=Uname,
            uemail=Uemail,
            urating=Urating,
            ureview=Ureview
        )

        return JsonResponse(
            {"message": "Review saved successfully"},
            status=201
        )

    except json.JSONDecodeError:
        return JsonResponse(
            {"error": "Invalid JSON"},
            status=400
        )



def viewBusinessReview(request):

    review = BusinessReview.objects.all().values('uname', 'uemail', 'urating', 'ureview')
    

    return JsonResponse(list(review), safe=False)