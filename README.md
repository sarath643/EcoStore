# Next.js Ecommerce App - Interview Project

A modern, responsive ecommerce application built with Next.js 14, TypeScript, and Redux Toolkit. This project demonstrates full-stack development skills, state management, API integration, and modern React patterns.

## 🚀 Live Demo

[EcoStore](https://eco-store-henna.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Design Decisions](#design-decisions)
- [Performance Optimizations](#performance-optimizations)
- [Testing](#testing)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)

## ✨ Features

### Core Functionality

- 🛍️ **Product Catalog** - Browse products with category filtering
- 🔍 **Product Details** - Detailed product view with images and descriptions
- 🛒 **Shopping Cart** - Add, remove, and update product quantities
- 💾 **Cart Persistence** - Cart state persists across browser sessions
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile
- ⚡ **Loading States** - Skeleton loaders and error handling
- 🎨 **Modern UI** - Clean, accessible design with shadcn/ui

### Technical Features

- 🔥 **Server-Side Rendering** - Next.js App Router with SSR
- 🎯 **Type Safety** - Full TypeScript implementation
- 🏪 **State Management** - Redux Toolkit with persistence
- 🌐 **API Integration** - RESTful API with error handling
- 📦 **Component Architecture** - Reusable, modular components
- 🎪 **Modern Styling** - Tailwind CSS with design system

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

### State Management

- **Store**: Redux Toolkit
- **Persistence**: localStorage with middleware

### API & Data

- **HTTP Client**: Native Fetch API with custom service layer
- **External API**: FakeStore API
- **Data Persistence**: Browser localStorage

### Development Tools

- **Linting**: ESLint
- **Package Manager**: npm
- **Code Formatting**: Prettier (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/sarath643/EcoStore
cd ecommerce-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ecommerce-app/
├── app/                          # Next.js App Router
│   ├── cart/                     # Cart page
│   │   └── page.tsx
│   ├── product/[id]/             # Dynamic product routes
│   │   └── page.tsx
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # Reusable components
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── sheet.tsx
│   │   └── skeleton.tsx
│   ├── Header.tsx                # Main navigation
│   ├── Footer.tsx                # Footer component
│   ├── ProductCard.tsx           # Product card component
│   └── CartModal.tsx             # Cart modal/drawer
├── redux/                        # State management
│   ├── store.ts                  # Redux store configuration
│   └── cartSlice.ts              # Cart slice with actions
├── services/                     # API layer
│   └── api.ts                    # API service class
├── config/                       # Configuration
│   └── api.ts                    # API endpoints and config
├── types/                        # TypeScript definitions
│   └── index.ts
├── utils/                        # Utility functions
│   └── localStorage.ts
├── hooks/                        # Custom React hooks
│   └── useCart.ts
├── lib/                          # Library utilities
│   └── utils.ts                  # shadcn/ui utilities
└── package.json
```

## 🌐 API Integration

### FakeStore API

The application integrates with the [FakeStore API](https://fakestoreapi.com/) for product data:

- **Products**: `GET /products`
- **Categories**: `GET /products/categories`
- **Single Product**: `GET /products/{id}`
- **Products by Category**: `GET /products/category/{category}`

### API Service Layer

```typescript
// Centralized API service with error handling
class ApiService {
  async getAllProducts(): Promise<Product[]>;
  async getProductById(id: string): Promise<Product>;
  async getAllCategories(): Promise<string[]>;
  async getProductsByCategory(category: string): Promise<Product[]>;
}
```

### Features

- ⏱️ Request timeout handling (10s)
- 🔄 Consistent error handling
- 🎯 TypeScript integration
- 🛡️ AbortController for request cancellation

## 🏪 State Management

### Redux Toolkit Implementation

```typescript
// Cart state structure
interface CartState {
  items: CartItem[];
  total: number;
  totalItems: number;
}

// Available actions
-addToCart(product) -
  removeFromCart(productId) -
  updateQuantity(productId, quantity) -
  loadCartFromStorage(items);
```

### Persistence Strategy

- **Middleware**: Automatic localStorage sync
- **Hydration**: Load cart state on app initialization
- **Error Handling**: Graceful fallback for storage errors

## 🎨 Design Decisions

### Architecture Choices

1. **Next.js App Router** - Modern routing with React Server Components
2. **Redux Toolkit** - Simplified Redux with built-in best practices
3. **shadcn/ui** - Accessible, customizable UI components
4. **Service Layer** - Separation of concerns for API calls
5. **Custom Hooks** - Reusable stateful logic

### UI/UX Decisions

- **Mobile-First** - Responsive design approach
- **Loading States** - Skeleton UI for better perceived performance
- **Error Boundaries** - Graceful error handling
- **Optimistic Updates** - Immediate cart feedback
- **Accessibility** - ARIA labels and keyboard navigation

## ⚡ Performance Optimizations

### Code Optimization

- **Tree Shaking** - Dead code elimination
- **Code Splitting** - Dynamic imports for routes
- **Bundle Analysis** - Optimized package selection
- **Memoization** - React.memo for expensive components

### Image Optimization

- **Next.js Image** - Automatic optimization and lazy loading
- **WebP Format** - Modern image formats when supported
- **Responsive Images** - Multiple sizes for different viewports

### Caching Strategy

- **Static Generation** - Pre-rendered pages where possible
- **API Response Caching** - Browser cache headers
- **localStorage** - Client-side state persistence

## 🧪 Testing

### Testing Strategy (Recommended)

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest-environment-jsdom

# Test commands
npm run test          # Run unit tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

### Test Coverage Areas

- **Components** - UI component functionality
- **Redux Store** - State management logic
- **API Service** - HTTP request handling
- **Utilities** - Helper functions
- **Integration** - User workflows

## 🚢 Deployment

### Deployment Options

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Netlify

````bash
# Build command
npm run build


### Environment Variables
Create `.env.local` for environment-specific config:
```env
NEXT_PUBLIC_API_URL=https://fakestoreapi.com
NEXT_PUBLIC_APP_NAME=EStore
````

## 🔮 Future Enhancements

### Short Term

- [ ] **Search Functionality** - Product search with filters
- [ ] **User Authentication** - Login/signup system
- [ ] **Wishlist Feature** - Save products for later
- [ ] **Product Reviews** - Rating and review system
- [ ] **Order History** - Track previous purchases

### Long Term

- [ ] **Payment Integration** - Stripe/PayPal checkout
- [ ] **Admin Dashboard** - Product management
- [ ] **Real-time Updates** - WebSocket integration
- [ ] **PWA Features** - Offline functionality
- [ ] **Multi-language** - i18n support
- [ ] **Analytics** - User behavior tracking

## 📝 Development Notes

### Code Quality

- **ESLint** - Enforced coding standards
- **TypeScript** - Strict type checking enabled
- **Prettier** - Consistent code formatting
- **Husky** - Pre-commit hooks (recommended)

### Best Practices Followed

- ✅ Component composition over inheritance
- ✅ Custom hooks for stateful logic
- ✅ Proper error boundaries
- ✅ Accessibility considerations
- ✅ SEO optimization
- ✅ Performance monitoring ready

### Interview Focus Areas

This project demonstrates:

- **React/Next.js Expertise** - Modern React patterns and Next.js features
- **State Management** - Complex state with Redux Toolkit
- **TypeScript Skills** - Full type safety implementation
- **API Integration** - RESTful API consumption with error handling
- **UI/UX Design** - Responsive, accessible user interface
- **Code Architecture** - Clean, maintainable code structure
- **Performance** - Optimization techniques and best practices

## 🤝 Contact

** Sarath Surendran **

- 📧 Email: [sarathsurendran0643@gmail.com](mailto:sarathsurendran0643@gmail.com)
- 💼 LinkedIn: [Sarath Surendran](https://www.linkedin.com/in/sarath-surendran-596916320/)
- 🐙 GitHub: [sarath643](https://github.com/sarath643)

---

## 📄 License

This project is created for interview purposes and is available under the MIT License.

---

_Built with ❤️ using Next.js, TypeScript, and modern web technologies_
