
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
const {method} = req;
await mongooseConnect();
if (method === 'POST') {
    try {
    const {title, description, price} = req.body;
    const productDoc = await Product.create({
        title, description, price,
    });

    res.json('productDoc');
    } catch (error) {
        res.status(500).json({ error: 'Unable to create the product'});
    }
} else {
    res.status(405).json({ error: 'Method Not Allowed' });
}
}
