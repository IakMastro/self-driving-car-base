<center> <h1> Self Driving Cars </h1> </center>

<b>About:</b>

This is a group project made for the Internet of Things (IoT) class for the University of West Attica(UniWA).

This project is about smart/self driving cars and their inner 'smart' communication.

The idea behind this project is to create 2 autonomous cars that can drive themselves and use sensors such as cameras and sonars to detect and avoid objects.

<b>Requirements:</b>

- Docker
- Docker-compose
- 1 Raspberry Pi per car
- 4 Sonar modules per car
- 1 camera module for each Raspberry Pi
- Motors, wheels and other components for the car movement

<b>Git Repositories:</b>

- Hardware Configuration: <code>https://github.com/BlackICE-Zed/iot_2021_hardware.git</code>
- Sonar: <code>https://git.sexycoders.org/SexyCoders/crash-bot.git</code>
- Camera: <code>https://github.com/Panagiotis-INS/self-driving-car-camera.git</code>
- Orchestration and Configuration: <code>https://github.com/IakMastro/self-driving-car-base.git</code>
- Interface: <code>https://github.com/IakMastro/self-driving-car-interface</code>

<b>Installation:</b>
---

```sh
# If it is installed on Debian-based Linux
./install_debian.sh

# If it is installed on Arch-based Linux
./install_arch.sh
```

<b>Usage:</b>
---

```sh 
./launch.sh
```

<b>Full Documentation:</b>
---

For the full documentation read the [Documentation](https://github.com/IakMastro/self-driving-car-base/blob/main/docs/Documentation.adoc) file.
