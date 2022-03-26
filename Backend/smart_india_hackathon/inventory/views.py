from .models import PatientData
from rest_framework.generics import (
    ListCreateAPIView,
)
from .serializers import (
    PatientDataSerializer
)
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser


# A view that allows users to create a product inventory.
class PatientListAPIView(ListCreateAPIView):
    serializer_class = PatientDataSerializer
    queryset = PatientData.objects.all()
    # permission_classes = (
    #     permissions.IsAuthenticated,
    # )
    parser_classes = [MultiPartParser, FormParser]

    def perform_create(self, serializer, format=None):
        """
        The perform_create function is called when we create a new object.        
        It takes the serializer as an argument, and returns the object that was created.        
        We can use the serializer to create the object, and then add the donor field to it.       
        We can then return the object
        
        :param serializer: The serializer instance that should be used for validating and
        :param format: The format of the request’s data. By default only JSON is supported
        :return: The serialized data for the new question.
        """
        return serializer.save(patient=self.request.user)

    def get_queryset(self):
        """
        This function is used to filter the queryset of the model. 
        Used to filter the queryset of the model by the donor.
        :return: A list of objects that have the same donor as the user.
        """
        # This is filtering the queryset of the model by the donor.
        return self.queryset.all()