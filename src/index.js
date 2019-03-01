//import rclnodejs from '../index.js';
const rclnodejs = require('rclnodejs');

const XVIZBuilder = require('@xviz/builder');
//import {XVIZBuilder} from '@xviz/builder';

const xvizBuilder = new XVIZBuilder({
  metadata: {} // See XVIZMetadataBuilder for generating metadata object
});

const xb = xvizMetaBuilder;
xb.stream("imageStream")
    .category('primitive')
    .type('image');

rclnodejs.init().then(() => {
  let String = rclnodejs.require('std_msgs').msg.String;
  const node = rclnodejs.createNode('publisher_example_node');
  const publisher = node.createPublisher(String, 'topic');

  const subscriber = node.createSubscription(String, 'image_raw/compressed', function (image) {

    xvizBuilder
        .primitive(this.streamName)
        .image(nodeBufferToTypedArray(image), 'png')
        .dimensions(width, height);

  })


  let msg = new String();

  setInterval(function () {
    const str = 'Hello ROS2.0';
    msg.data = str;
    publisher.publish(msg);
  }, 1000);

  rclnodejs.spin(node);
});