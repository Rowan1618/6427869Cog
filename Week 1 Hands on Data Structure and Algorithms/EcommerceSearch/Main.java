package EcommerceSearch;

// Main.java
public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Clothing"),
            new Product(3, "Phone", "Electronics"),
            new Product(4, "Shoes", "Footwear"),
            new Product(5, "Book", "Stationery")
        };

        // Linear Search Test
        Product result1 = SearchEngine.linearSearch(products, "Phone");
        System.out.println("Linear Search: " + (result1 != null ? result1 : "Not found"));

        // Binary Search Test
        SearchEngine.sortByName(products); // Binary search requires sorted array
        Product result2 = SearchEngine.binarySearch(products, "Phone");
        System.out.println("Binary Search: " + (result2 != null ? result2 : "Not found"));
    }
}
