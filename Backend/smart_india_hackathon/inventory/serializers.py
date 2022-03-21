from rest_framework import serializers
from .models import PatientData

class PatientDataSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    hospital_name = serializers.CharField(max_length=100, required=True)
    problem_dignosed = serializers.CharField(max_length=200, required=True)
    surgery_name = serializers.CharField(max_length=200, required=False)
    cost = serializers.IntegerField(required=True)
    receipt_file = serializers.FileField(required=True)

    class Meta:
        model = PatientData
        fields = [
            "id",
            "hospital_name",
            "problem_dignosed",
            "surgery_name",
            "cost",
            "receipt_file",   
        ]