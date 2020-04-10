import BasePage from "./basepage";

export default class TravelPage extends BasePage{
    constructor() {
        super();
        this.searchBoxElement = '[name="q"]';
    }
}