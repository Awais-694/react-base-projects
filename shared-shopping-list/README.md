# 🛒 Shared Shopping List (Module 1: Advanced State)

## Humne is project mein kya kiya?
1. **Context API Implementation**: Humne `ShoppingContext` banaya taake `items` ka data aur `addItem` ka function kisi bhi component mein direct use ho sakay (Prop Drilling khatam!).
2. **Lifting State Up**: Data ko `ShoppingProvider` mein rakha taake `AddItem` (Input) aur `ShoppingList` (Display) jo ke aapas mein siblings hain, aik hi data share kar sakein.
3. **Synchronization**: Jaise hi aik component mein item add hota hai, doosra component foran update ho jata hai.
4. **useRef Practice**: Input box par focus manage karne ke liye `useRef` ka basic use kiya.

## Packages Used
- `lucide-react`: Icons ke liye.
- `React Context`: Global State management ke liye.