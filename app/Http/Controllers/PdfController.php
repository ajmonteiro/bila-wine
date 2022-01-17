<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PDF;
use App\Models\Order;

class PdfController extends Controller
{
    /**
     *
     * @param id order
     *
     */
    public function generate($id)
    {
        $order = Order::where('id', $id)->get()[0];

        $products = json_decode($order->products, true);
        $info = json_decode($order->info, true);
        $id_invoice = $order->id_invoice . date("YmdHis");

        $data = [
            'title' => 'BILAWINE',
            'order' => $order,
            'products' => $products,
            'info' => $info
        ];

        $pdf = PDF::loadView('pdf.invoice', $data);
        $save = $pdf->save("storage/${id_invoice}.pdf");

        return response()->json([
            'link' => "storage/${id_invoice}.pdf"
        ], 200);
    }
}
