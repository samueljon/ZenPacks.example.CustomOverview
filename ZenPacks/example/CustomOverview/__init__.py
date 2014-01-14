from Products.ZenModel.Device import Device
from Products.Zuul.infos import ProxyProperty
from Products.Zuul.infos.device import DeviceInfo


# Set a default value for a device's contact.
Device.contact = ''
Device.contract = ''

# Make a device's contact available through the API.
DeviceInfo.contact = ProxyProperty('contact')
DeviceInfo.contact = ProxyProperty('contract')
