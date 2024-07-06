import tensorflow as tf
from tensorflow.keras.layers import Conv2D

# Example input: a batch of 32x32 images with 64 channels
input_shape = (None, 32, 32, 64)  # None for batch size
inputs = tf.keras.Input(shape=(32, 32, 64))

# 1x1 convolution to reduce the number of channels to 32
x = Conv2D(filters=32, kernel_size=(1, 1), activation='relu')(inputs)

# Build the model
model = tf.keras.Model(inputs=inputs, outputs=x)

# Summary of the model
model.summary()
