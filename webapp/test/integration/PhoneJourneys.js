jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/integrata/training/flights/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/integrata/training/flights/test/integration/pages/App",
	"de/integrata/training/flights/test/integration/pages/Browser",
	"de/integrata/training/flights/test/integration/pages/Master",
	"de/integrata/training/flights/test/integration/pages/Detail",
	"de/integrata/training/flights/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.integrata.training.flights.view."
	});

	sap.ui.require([
		"de/integrata/training/flights/test/integration/NavigationJourneyPhone",
		"de/integrata/training/flights/test/integration/NotFoundJourneyPhone",
		"de/integrata/training/flights/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});