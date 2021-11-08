import pandas as pd
from django.contrib.auth.models import User

# users_list = pd.read_csv('Login/final_2.csv',dtype=str)

####################
# WORKING SOLUTION #
####################

# for i in range(users_list.shape[0]):
#     print(i)
#     new_user, created = User.objects.get_or_create(username=users_list['Username'][i],email=users_list['Username'][i]+'@purdue.edu')
#     new_user.set_password(users_list['PUID'][i])
#     new_user.save()