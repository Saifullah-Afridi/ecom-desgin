import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "./ui/pagination";

export default function CustomPagination() {
  return (
    <Pagination>
      <PaginationContent className="w-full flex justify-between gap-5 py-2">
        {/* Previous */}
        <div>
          <PaginationItem>
            <PaginationPrevious asChild>
              <button>Previous</button>
            </PaginationPrevious>
          </PaginationItem>
        </div>

        <div className="flex items-center gap-2">
          <PaginationItem>
            <PaginationLink asChild>
              <button>1</button>
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink asChild isActive>
              <button>2</button>
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink asChild>
              <button>3</button>
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        </div>

        <PaginationItem>
          <PaginationNext asChild>
            <button>Next</button>
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
