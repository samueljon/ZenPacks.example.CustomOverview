//Little more details about the overviewpanel http://wiki.zenoss.org/Device_Overview_Panels
(function(){

 Ext.onReady(function() {

	 // Add information to the device overview page.
	 var PANEL_ID = 'deviceoverviewpanel_systemsummary';
	 Ext.ComponentMgr.onAvailable(PANEL_ID, function(){
		 var panel = Ext.getCmp(PANEL_ID);
		 //INDEX0
		 panel.insert(0, {
			name: 'contact',
			xtype: 'textfield',
			fieldLabel: _t('Technical Contact')
		});
	});
	var PANEL_ID2 = 'deviceoverviewpanel_idsummary';
	Ext.ComponentMgr.onAvailable(PANEL_ID2, function(){
		 var panel = Ext.getCmp(PANEL_ID2);
		 //INDEX0
		 panel.insert(5, {
			name: 'contract',
			xtype: 'textfield',
			fieldLabel: _t('Contract')
		});
	});
});

})();
