sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ey/cap/project/purchaseorder/test/integration/FirstJourney',
		'ey/cap/project/purchaseorder/test/integration/pages/POsList',
		'ey/cap/project/purchaseorder/test/integration/pages/POsObjectPage',
		'ey/cap/project/purchaseorder/test/integration/pages/PurchaseOrderItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ey/cap/project/purchaseorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemSetObjectPage: PurchaseOrderItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);