const ATTRIBUTE_CONTRAST = "data-contrast";
const ATTRIBUTE_FONT_SIZE = "data-font-size";

const updateAccessibilitySetting = (
	key,
	value,
) => {
	window.localStorage.setItem(key, value);
};

const retrieveAccessibilitySetting = (
	key,
	default_value,
) => {
	const saved_value =
		window.localStorage.getItem(key);
	if (saved_value === null) {
		updateAccessibilitySetting(
			key,
			default_value,
		);
		return default_value;
	}
	return saved_value;
};

const updateButtonText = (selector, text) => {
	const buttonElement =
		document.querySelector(selector);

	if (buttonElement === null) {
		return;
	}

	buttonElement.innerHTML = text;
};

const switchContrast = () => {
	const htmlElement =
		document.querySelector("html");

	let nextContrastMode = "";

	if (
		retrieveAccessibilitySetting(
			ATTRIBUTE_CONTRAST,
			"default",
		) === "default"
	) {
		nextContrastMode = "high";
	} else {
		nextContrastMode = "default";
	}

	updateAccessibilitySetting(
		ATTRIBUTE_CONTRAST,
		nextContrastMode,
	);
	htmlElement.setAttribute(
		ATTRIBUTE_CONTRAST,
		nextContrastMode,
	);

	updateButtonText(
		"#button_switch_contrast",
		`${
			nextContrastMode === "default"
				? "Enable"
				: "Disable"
		} High Contrast Mode`,
	);
};

const switchFontSize = () => {
	const htmlElement =
		document.querySelector("html");

	let nextFontSizeMode = "";

	if (
		retrieveAccessibilitySetting(
			ATTRIBUTE_FONT_SIZE,
			"default",
		) === "default"
	) {
		nextFontSizeMode = "large";
	} else {
		nextFontSizeMode = "default";
	}

	updateAccessibilitySetting(
		ATTRIBUTE_FONT_SIZE,
		nextFontSizeMode,
	);
	htmlElement.setAttribute(
		ATTRIBUTE_FONT_SIZE,
		nextFontSizeMode,
	);

	updateButtonText(
		"#button_switch_font_size",
		`${
			nextFontSizeMode === "default"
				? "Enable"
				: "Disable"
		} Large Text Mode`,
	);
};

const loadSettings = () => {
	const htmlElement =
		document.querySelector("html");

	const contrastMode =
		retrieveAccessibilitySetting(
			ATTRIBUTE_CONTRAST,
			"default",
		);

	htmlElement.setAttribute(
		ATTRIBUTE_CONTRAST,
		contrastMode,
	);

	updateButtonText(
		"#button_switch_contrast",
		`${
			contrastMode === "default"
				? "Enable"
				: "Disable"
		} High Contrast Mode`,
	);

	const fontSizeMode =
		retrieveAccessibilitySetting(
			ATTRIBUTE_FONT_SIZE,
			"default",
		);

	htmlElement.setAttribute(
		ATTRIBUTE_FONT_SIZE,
		fontSizeMode,
	);

	updateButtonText(
		"#button_switch_font_size",
		`${
			fontSizeMode === "default"
				? "Enable"
				: "Disable"
		} Large Text Mode`,
	);
};

(() => {
	window.addEventListener("storage", () => {});

	if (document.readyState === "loading") {
		document.addEventListener(
			"DOMContentLoaded",
			loadSettings,
		);
	} else {
		loadSettings();
	}
})();
