
type Purchase = {
    product: string,
    deliveryType: string,
};

function trackPurchase(product: string) {
    console.log(`Track product: ${product}`);
}

function issuePurchase(product: string) {
    console.log(`Track product: ${product}`);
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

class Delivery {
    protected purchase: Purchase;

    constructor(purchase: Purchase) {
        this.purchase = purchase;
    }

    deliverProduct() {
        if (this.purchase.deliveryType === 'express') {
            Logistics.issueExpressDelivery(this.purchase.product);
        } else if (this.purchase.deliveryType === 'insured') {
            Logistics.issueInsuredDelivery(this.purchase.product);
        } else {
            Logistics.issueStandardDelivery(this.purchase.product);
        }
    }

    trackProduct() {
        if (this.purchase.deliveryType === 'express') {
            Logistics.trackExpressDelivery(this.purchase.product);
        } else if (this.purchase.deliveryType === 'insured') {
            Logistics.trackInsuredDelivery(this.purchase.product);
        } else {
            Logistics.trackStandardDelivery(this.purchase.product);
        }
    }
}

// class DeliveryExpress extends Delivery {
//     deliverProduct(): void {
//         Logistics.issueExpressDelivery(this.purchase.product);
//     }

//     trackProduct(): void {
//         Logistics.trackExpressDelivery(this.purchase.product);
//     }
// }

// class DeliveryInsured extends Delivery {
//     deliveryProduct(): void {
//         Logistics.issueInsuredDelivery(this.purchase.product);
//     }

//     trackProduct(): void {
//         Logistics.trackInsuredDelivery(this.purchase.product);
//     }
// }

// class DeliveryStandard extends Delivery {
//     deliveryProduct(): void {
//         Logistics.issueStandardDelivery(this.purchase.product);
//     }

//     trackProduct(): void {
//         Logistics.trackStandardDelivery(this.purchase.product);
//     }
// }

class Main {
    main() {
        let purchase: Purchase = {
            deliveryType: '',
            product: 'Soda',
        };

        const deliveryStandard = new Delivery(purchase);
        deliveryStandard.deliverProduct();
        deliveryStandard.trackProduct();

        purchase = {
            deliveryType: 'insured',
            product: 'Café',
        };

        const deliveryInsured = new Delivery(purchase);
        deliveryInsured.deliverProduct();
        deliveryInsured.trackProduct();

        purchase = {
            deliveryType: 'express',
            product: 'Cereal',
        };

        const deliveryExpress = new Delivery(purchase);
        deliveryExpress.deliverProduct();
        deliveryExpress.trackProduct();
    }
}

const program = new Main();
program.main();
