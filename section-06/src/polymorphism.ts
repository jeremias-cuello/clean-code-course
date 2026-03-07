
type Purchase = {
    product: string,
    deliveryType: string,
};

function trackPurchase(product: string) {
    console.log(`Track product: ${product}`);
}

function issuePurchase(product: string) {
    console.log(`Delivery product: ${product}`);
}

let Logistics: any = {
    trackExpressDelivery(product: string) {
        trackPurchase(product);
    },
    issueExpressDelivery(product: string) {
        issuePurchase(product);
    },
    trackStandardDelivery(product: string) {
        trackPurchase(product);
    },
    issueStandardDelivery(product: string) {
        issuePurchase(product);
    },
    trackInsuredDelivery(product: string) {
        trackPurchase(product);
    },
    issueInsuredDelivery(product: string) {
        issuePurchase(product);
    },
};

interface Delivery {
    deliverProduct(): void;
    trackProduct(): void;
}

class DeliveryImplementation {
    protected purchase: Purchase;

    constructor(purchase: Purchase) {
        this.purchase = purchase;
    }
}

class DeliveryExpress extends DeliveryImplementation implements Delivery {
    deliverProduct(): void {
        Logistics.issueExpressDelivery(this.purchase.product);
    }

    trackProduct(): void {
        Logistics.trackExpressDelivery(this.purchase.product);
    }
}

class DeliveryInsured extends DeliveryImplementation implements Delivery {
    deliverProduct(): void {
        Logistics.issueInsuredDelivery(this.purchase.product);
    }

    trackProduct(): void {
        Logistics.trackInsuredDelivery(this.purchase.product);
    }
}

class DeliveryStandard extends DeliveryImplementation implements Delivery {
    deliverProduct(): void {
        Logistics.issueStandardDelivery(this.purchase.product);
    }

    trackProduct(): void {
        Logistics.trackStandardDelivery(this.purchase.product);
    }
}

function createDelivery(purchase: Purchase): Delivery {
    let delivery: Delivery;

    switch (purchase.deliveryType) {
        case 'express':
            delivery = new DeliveryExpress(purchase);
            break;
        case 'insured':
            delivery = new DeliveryInsured(purchase);
            break;
        default:
            delivery = new DeliveryStandard(purchase);
            break;
    }

    return delivery;
}

class Main {
    main() {
        let purchase: Purchase = {
            deliveryType: '',
            product: 'Soda',
        };

        const deliveryStandard = createDelivery(purchase);
        deliveryStandard.deliverProduct();
        deliveryStandard.trackProduct();

        purchase = {
            deliveryType: 'insured',
            product: 'Café',
        };

        const deliveryInsured = createDelivery(purchase);;
        deliveryInsured.deliverProduct();
        deliveryInsured.trackProduct();

        purchase = {
            deliveryType: 'express',
            product: 'Cereal',
        };

        const deliveryExpress = createDelivery(purchase);
        deliveryExpress.deliverProduct();
        deliveryExpress.trackProduct();
    }
}

const program = new Main();
program.main();
