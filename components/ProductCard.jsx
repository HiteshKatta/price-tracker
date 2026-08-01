"use client";

import { useState } from "react";
import { deleteProduct } from "@/app/actions";
import PriceChart from "./PriceChart";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Trash2,
  TrendingDown,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

export default function ProductCard({ product }) {
  const [showChart, setShowChart] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Remove this product from tracking?")) return;

    setDeleting(true);
    await deleteProduct(product.id);
  };

  return (
    <Card className="group overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
      <CardHeader className="pb-3 border-b border-slate-100">
        <div className="flex gap-4">
          {product.image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.image_url}
              alt={product.name}
              className="w-24 h-24 object-cover rounded-lg border border-slate-200 shadow-sm group-hover:shadow-md transition-shadow"
            />
          )}

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-slate-900 line-clamp-2 mb-3 tracking-tight">
              {product.name}
            </h3>

            <div className="flex items-end gap-3">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 mb-1">Current Price</span>
                <span className="text-2xl font-bold text-orange-600">
                  {product.currency} {product.current_price}
                </span>
              </div>
              <Badge variant="secondary" className="gap-1 mb-1 bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100">
                <TrendingDown className="w-3 h-3" />
                Tracking
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4 pb-4">
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowChart(!showChart)}
            className="gap-1.5 text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-colors"
          >
            {showChart ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Hide Chart
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show Chart
              </>
            )}
          </Button>

          <Button 
  variant="outline" 
  size="sm" 
  onClick={() => window.open(product.url, '_blank')}
  className="gap-1.5 text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-colors"
>
  <ExternalLink className="w-4 h-4" />
  View Product
</Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            disabled={deleting}
            className="ml-auto gap-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Remove
          </Button>
        </div>
      </CardContent>

      {showChart && (
        <CardFooter className="pt-0 px-6 py-4 border-t border-slate-100 bg-slate-50">
          <div className="w-full">
            <PriceChart productId={product.id} />
          </div>
        </CardFooter>
      )}
    </Card>
  );
}