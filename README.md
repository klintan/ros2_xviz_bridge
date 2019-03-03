# ROS2 to XVIZ bridge
XVIZ is "A protocol for real-time transfer and visualization of autonomy data" open sourced by UBER ATG.

Unfortunately at the moment there is no support for ROS2, and even though they have it on their road map, it might only support ROS1 bags. 

This is an attempt to create a bridge/server for converting ROS2 messages into appropriate XVIZ messages which can then easily be displayed in the streetscape.gl https://github.com/uber/streetscape.gl library.


## Installation

`yarn install`

## Usage

`npm start`


## 3rd party licenses
Code from Uber/Xviz is used https://github.com/uber/xviz/blob/master/LICENSE



