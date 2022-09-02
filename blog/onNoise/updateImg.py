import os
import glob 

source = 'C:\\Users\\DB676EB\\Downloads\\'
destination = '.\\blog\\onNoise\\images\\'

imgPaths = glob.glob(source + '**Noise.png')
for path in imgPaths:
    name = path.split('\\')[-1]
    os.rename(path, destination + name)
