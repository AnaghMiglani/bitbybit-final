# GIT-FUND  

## 🚀 Description  
**Git-Fund** is a decentralized platform that connects recruiters with freelancers via GitHub. It enables recruiters to post bounties, link them to GitHub issues, and process payments through smart contracts.  

### 🔹 How It Works  
1. **Post a Bounty:**  
   - Recruiters provide task details.  
   - Optionally, attach a GitHub issue from a selected repository.  
   - Payments are made in cryptocurrency via MetaMask to a smart contract.  

2. **Freelancer Contributions:**  
   - Freelancers submit pull requests to complete the bounty.  

3. **Approval & Payment:**  
   - Recruiters can review pull requests under the **"My Repo"** tab.  
   - Once accepted, the smart contract automatically transfers funds to the freelancer.  

🎥 **[Demo Video](https://drive.google.com/file/d/1oDG1lk3vXYgqRBinyBGwCxUBQWhPGhNt/view?usp=sharing)**  

---

## ⚙️ Setup  

### Prerequisites  
- Node.js installed  
- MetaMask wallet set up  

### 1️⃣ Environment Setup  
Create a `.env` file based on `sample.env`.  

### 2️⃣ Running the Application  
Open two terminal windows:  

#### **Frontend**  
```sh
cd frontend
npm install
npm run dev
```
### **Backend**
```sh
cd backend
npm install
npm start
```

