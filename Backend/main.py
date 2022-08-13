from copyreg import pickle
import numpy as np
import pandas as pd
import seaborn as sns
import pickle
# import matplotlib.pyplot as plt
# from matplotlib import cm
import keras
from keras.models import Sequential
from keras.layers import Dense

from sklearn.preprocessing import StandardScaler,LabelBinarizer

'''for i in range(21):
    n=int(input())
    l.append(n)'''


d=pd.read_csv(r'C:\Users\Gaurav\Desktop\Hackathon\FINAL_Hackathon\Backend\diabetes.csv')
y=d.iloc[:,0]
x=d.iloc[:,1:]
y=LabelBinarizer().fit_transform(y)
model=Sequential()
model.add(Dense(12,input_dim=21,activation= 'relu'))
model.add(Dense(units=15,activation= 'relu'))
model.add(Dense(units=8,activation= 'relu'))
model.add(Dense(units=10,activation= 'relu'))
model.add(Dense(units=3,activation= 'softmax'))
model.compile(loss='categorical_crossentropy',optimizer='adam',metrics=['accuracy'])
history = model.fit(x,y,batch_size=500, epochs = 20)


model.save('model.h5')