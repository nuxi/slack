release: clean prod
	zip -r -FS slack.xpi *.json *.js

debug:
	sed -i 's;\.slack\.com;.browserleaks.com;g' *.json *.js

prod production:
	sed -i 's;\.browserleaks\.com;.slack.com;g' *.json *.js

clean:
	rm -f slack.xpi

.PHONY: release debug prod production clean
