# <p align="center"> 🚀 Playwright Testing Framework for Saucedemo.com </p>


## 📝 Project Overview
This project implements a comprehensive testing framework for Saucedemo.com using Playwright with TypeScript. The framework tests key e-commerce functionalities including login, product sorting, cart management, and checkout processes.


## � Features Tested
- ✅ Login feature.
- ✅ Add to cart functionality.
- ✅ Checkout process.
- ✅ Remove from cart.
- ✅ Sort feature (A-Z and Price High to Low).


## 🛠️ Technical Implementation
1. Page Object Model (POM):
   - Separate classes for each major page component.
   - Encapsulates locators and page-specific methods.
    
2. Test Organization:
   - Separate test files for each feature.
   - Descriptive test names and grouping.

3. Advanced Playwright Features:
   - Hooks (beforeAll, beforeEach, afterEach, afterAll).
   - Parameterized tests using .env variables.
   - Test annotations (skip, fail, fixme).
   - Multi-browser testing.


## 📁 Project Structure
saucedemo-playwright/

├── tests/

│   ├── login.spec.ts

│   ├── sort.spec.ts

│   ├── addToCart.spec.ts

│   ├── cartNavigation.spec.ts

│   ├── checkout.spec.ts

│   └── browserLaunch.spec.ts

├── pages/

│   ├── POM-logIn.ts

│   ├── POM-addToCart.ts

│   └── POM-checkOut.ts

├── .env

└── README.md


## 🔧 Key Technologies Used
- Playwright: Next-generation end-to-end testing framework.
- TypeScript: Strongly typed JavaScript superset.
- Dotenv: Environment variable management.


## 📊 Test Reporting
Playwright generates comprehensive HTML reports showing:
- Test execution status (passed/failed/skipped).
- Execution time.
- Screenshots on failure.
- Trace viewer for debugging.

To view reports:
npx playwright show-report.


## 🏆 Conclusion
This framework demonstrates robust testing practices for web applications using Playwright. It showcases:
- Clean test organization.
- Maintainable page objects.
- Comprehensive test coverage.
- Advanced Playwright features.
- Professional reporting.
The implementation follows best practices for modern web application testing while providing flexibility for future expansion.
