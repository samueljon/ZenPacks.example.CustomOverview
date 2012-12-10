ZenPacks.example.CustomOverview
===============================

This ZenPack provides an example for customizing the device overview screen. A
new *contact* property is added for devices. This new property is then shown
and able to be edited on each device overview screen.

The following files contain the implementation:

__init__.py
  Adds the *contact* property to all devices, sets its default value to a
  blank string, and makes it available through the API and therefore the web
  interface.

configure.zcml
  Adds a static web resources directory and registers *zaasdevice.js* to be
  delivered for all device pages.

resources/zaasdevice.js
  Adds the *Technical Contact* to the bottom-left panel of the device overview
  screen.

.. figure:: https://github.com/zenoss/ZenPacks.example.CustomOverview/raw/master/screenshots/technical_contact.png
   :alt: Device overview screenshot showing technical contact field

   Device overview screenshot showing technical contact field.
