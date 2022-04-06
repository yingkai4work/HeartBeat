export const MULTI_ASSIGNEE2 = {
  changelog: {
    startAt: 0,
    maxResults: 64,
    total: 64,
    histories: [
      {
        id: "9047586",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=ruelbarrina",
          name: "ruelbarrina",
          key: "JIRAUSER20246",
          emailAddress: "ruel.barrina@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Ruel Barrina",
          active: true,
          timeZone: "Asia/Manila",
        },
        created: "2022-02-10T20:48:30.447+1100",
        items: [
          {
            field: "summary",
            fieldtype: "jira",
            from: null,
            fromString:
              "EL-47187|When deactivating a product bankfast DB.accountType details getting deleted",
            to: null,
            toString:
              "EL-47187|SAPF-5534 WBBS-3825 - When deactivating a product bankfast DB.accountType details getting deleted",
          },
        ],
      },
      {
        id: "9076741",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_haoyan",
          name: "e_tws_haoyan",
          key: "JIRAUSER20381",
          emailAddress: "e_tws_haoyan@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Hao Yan",
          active: true,
          timeZone: "Asia/Shanghai",
        },
        created: "2022-02-21T17:16:27.781+1100",
        items: [
          {
            field: "description",
            fieldtype: "jira",
            from: null,
            fromString:
              "P&S : HIgh\r\n Defect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\n Defect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n 1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n 2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\n a)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\n b)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\n c)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\n Expecting Result – when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.",
            to: null,
            toString:
              "P&S : HIgh\r\nDefect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\nDefect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\na)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\nb)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\nc)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\nExpecting Result – when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.\r\n----\r\nSST update:\r\n\r\n*Definition of Ready:*\r\n\r\nRequirements cleared and clarified ✅\r\n\r\nThe Product code entry should in bankfast DB.accountType should *not* be deleted for below scenarios:\r\n * When the Product is be deactivated\r\n * When the Product is retired (the Withdrawn date of the product is already reached)\r\n\r\n \r\n\r\nAcceptance Criteria indicated ✅\r\n\r\n*AC*\r\n\r\n*AC01*\r\n\r\nGiven a product had been created and published through Product Factory\r\nWhen the \r\n\r\n*Definition of Done (before sending to QA for testing):*\r\n * The changes had been implemented based on the ACs \r\n * Unit Testing completed in both local and CI environment\r\n * All PR comments addressed\r\n * Code merged in Master\r\n * Resolution provided",
          },
        ],
      },
      {
        id: "9076766",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_haoyan",
          name: "e_tws_haoyan",
          key: "JIRAUSER20381",
          emailAddress: "e_tws_haoyan@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Hao Yan",
          active: true,
          timeZone: "Asia/Shanghai",
        },
        created: "2022-02-21T17:21:01.254+1100",
        items: [
          {
            field: "description",
            fieldtype: "jira",
            from: null,
            fromString:
              "P&S : HIgh\r\nDefect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\nDefect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\na)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\nb)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\nc)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\nExpecting Result – when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.\r\n----\r\nSST update:\r\n\r\n*Definition of Ready:*\r\n\r\nRequirements cleared and clarified ✅\r\n\r\nThe Product code entry should in bankfast DB.accountType should *not* be deleted for below scenarios:\r\n * When the Product is be deactivated\r\n * When the Product is retired (the Withdrawn date of the product is already reached)\r\n\r\n \r\n\r\nAcceptance Criteria indicated ✅\r\n\r\n*AC*\r\n\r\n*AC01*\r\n\r\nGiven a product had been created and published through Product Factory\r\nWhen the \r\n\r\n*Definition of Done (before sending to QA for testing):*\r\n * The changes had been implemented based on the ACs \r\n * Unit Testing completed in both local and CI environment\r\n * All PR comments addressed\r\n * Code merged in Master\r\n * Resolution provided",
            to: null,
            toString:
              'P&S : HIgh\r\nDefect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\nDefect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\na)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\nb)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\nc)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\nExpecting Result – when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.\r\n----\r\nSST update:\r\n\r\n*Definition of Ready:*\r\n\r\nRequirements cleared and clarified ✅\r\n\r\nThe Product code entry should in bankfast DB.accountType should *not* be deleted for below scenarios:\r\n * When the Product is be deactivated\r\n * When the Product is retired (the "Withdrawn From Sales Date" of the product is already reached)\r\n\r\n \r\n\r\nAcceptance Criteria indicated ✅\r\n\r\n*AC*\r\n\r\n*AC01*\r\n\r\nGiven a product had been created and published through Product Factory\r\nWhen the "Withdrawn From Sales Date" of the product is reached or passed\r\nOr when the product is be deactivated\r\nThen the product should still be present in be present in bankfast DB.accountType\r\n\r\n\r\n\r\n*Definition of Done (before sending to QA for testing):*\r\n * The changes had been implemented based on the ACs \r\n * Unit Testing completed in both local and CI environment\r\n * All PR comments addressed\r\n * Code merged in Master\r\n * Resolution provided',
          },
        ],
      },
      {
        id: "9076802",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_haoyan",
          name: "e_tws_haoyan",
          key: "JIRAUSER20381",
          emailAddress: "e_tws_haoyan@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Hao Yan",
          active: true,
          timeZone: "Asia/Shanghai",
        },
        created: "2022-02-21T17:25:21.146+1100",
        items: [
          {
            field: "Link",
            fieldtype: "jira",
            from: null,
            fromString: null,
            to: "UECSUP-7831",
            toString: "This issue is duplicate of UECSUP-7831",
          },
        ],
      },
      {
        id: "9076845",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_haoyan",
          name: "e_tws_haoyan",
          key: "JIRAUSER20381",
          emailAddress: "e_tws_haoyan@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Hao Yan",
          active: true,
          timeZone: "Asia/Shanghai",
        },
        created: "2022-02-21T17:33:09.866+1100",
        items: [
          {
            field: "Component",
            fieldtype: "jira",
            from: "19202",
            fromString: "Product Factory",
            to: null,
            toString: null,
          },
          {
            field: "Component",
            fieldtype: "jira",
            from: null,
            fromString: null,
            to: "19209",
            toString: "Elevate Online - Bankfast DXP",
          },
        ],
      },
      {
        id: "9077050",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_haoyan",
          name: "e_tws_haoyan",
          key: "JIRAUSER20381",
          emailAddress: "e_tws_haoyan@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Hao Yan",
          active: true,
          timeZone: "Asia/Shanghai",
        },
        created: "2022-02-21T17:51:01.931+1100",
        items: [
          {
            field: "Link",
            fieldtype: "jira",
            from: "UECSUP-7831",
            fromString: "This issue is duplicate of UECSUP-7831",
            to: null,
            toString: null,
          },
        ],
      },
      {
        id: "9077058",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_haoyan",
          name: "e_tws_haoyan",
          key: "JIRAUSER20381",
          emailAddress: "e_tws_haoyan@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Hao Yan",
          active: true,
          timeZone: "Asia/Shanghai",
        },
        created: "2022-02-21T17:51:29.887+1100",
        items: [
          {
            field: "Link",
            fieldtype: "jira",
            from: null,
            fromString: null,
            to: "UECSUP-7831",
            toString: "This issue is related to UECSUP-7831",
          },
        ],
      },
      {
        id: "9077113",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_haoyan",
          name: "e_tws_haoyan",
          key: "JIRAUSER20381",
          emailAddress: "e_tws_haoyan@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Hao Yan",
          active: true,
          timeZone: "Asia/Shanghai",
        },
        created: "2022-02-21T17:58:34.283+1100",
        items: [
          {
            field: "description",
            fieldtype: "jira",
            from: null,
            fromString:
              'P&S : HIgh\r\nDefect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\nDefect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\na)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\nb)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\nc)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\nExpecting Result – when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.\r\n----\r\nSST update:\r\n\r\n*Definition of Ready:*\r\n\r\nRequirements cleared and clarified ✅\r\n\r\nThe Product code entry should in bankfast DB.accountType should *not* be deleted for below scenarios:\r\n * When the Product is be deactivated\r\n * When the Product is retired (the "Withdrawn From Sales Date" of the product is already reached)\r\n\r\n \r\n\r\nAcceptance Criteria indicated ✅\r\n\r\n*AC*\r\n\r\n*AC01*\r\n\r\nGiven a product had been created and published through Product Factory\r\nWhen the "Withdrawn From Sales Date" of the product is reached or passed\r\nOr when the product is be deactivated\r\nThen the product should still be present in be present in bankfast DB.accountType\r\n\r\n\r\n\r\n*Definition of Done (before sending to QA for testing):*\r\n * The changes had been implemented based on the ACs \r\n * Unit Testing completed in both local and CI environment\r\n * All PR comments addressed\r\n * Code merged in Master\r\n * Resolution provided',
            to: null,
            toString:
              'P&S : HIgh\r\nDefect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\nDefect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\na)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\nb)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\nc)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\nExpecting Result – when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.\r\n----\r\nSST update on 21 Feb:\r\n\r\nBelow three tickets are related with each other, the scope of these tickets are:\r\n**\r\n * *UECSUP-7831 is for Apply and BankFast*\r\n * *UECSUP-7878 is for BankFast*\r\n * *UECSUP-7859 is for Apply and LendFast*\r\n\r\n*Definition of Ready:*\r\n\r\nRequirements cleared and clarified ✅\r\n\r\nThe Product code entry should in bankfast DB.accountType should *not* be deleted and the product won\'t be available on Apply, for below scenarios:\r\n * When the Product is be deactivated\r\n * When the Product is retired (the "Withdrawn From Sales Date" of the product is already reached)\r\n\r\nAcceptance Criteria indicated ✅\r\n\r\n*AC*\r\n\r\n*AC01*\r\n\r\nGiven a product had been created and published through Product Factory\r\nWhen the "Withdrawn From Sales Date" of the product is reached or passed\r\nOr when the product is be deactivated\r\nThen the product should still be present in be present in bankfast DB.accountType\r\n\r\n \r\n\r\n*Definition of Done (before sending to QA for testing):*\r\n * The changes had been implemented based on the ACs \r\n * Unit Testing completed in both local and CI environment\r\n * All PR comments addressed\r\n * Code merged in Master\r\n * Resolution provided',
          },
        ],
      },
      {
        id: "9077119",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_haoyan",
          name: "e_tws_haoyan",
          key: "JIRAUSER20381",
          emailAddress: "e_tws_haoyan@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Hao Yan",
          active: true,
          timeZone: "Asia/Shanghai",
        },
        created: "2022-02-21T17:59:01.291+1100",
        items: [
          {
            field: "labels",
            fieldtype: "jira",
            from: null,
            fromString: "Elevate_Grooming",
            to: null,
            toString: "GROOMED",
          },
        ],
      },
      {
        id: "9077133",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_haoyan",
          name: "e_tws_haoyan",
          key: "JIRAUSER20381",
          emailAddress: "e_tws_haoyan@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Hao Yan",
          active: true,
          timeZone: "Asia/Shanghai",
        },
        created: "2022-02-21T18:03:17.306+1100",
        items: [
          {
            field: "description",
            fieldtype: "jira",
            from: null,
            fromString:
              'P&S : HIgh\r\nDefect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\nDefect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\na)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\nb)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\nc)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\nExpecting Result – when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.\r\n----\r\nSST update on 21 Feb:\r\n\r\nBelow three tickets are related with each other, the scope of these tickets are:\r\n**\r\n * *UECSUP-7831 is for Apply and BankFast*\r\n * *UECSUP-7878 is for BankFast*\r\n * *UECSUP-7859 is for Apply and LendFast*\r\n\r\n*Definition of Ready:*\r\n\r\nRequirements cleared and clarified ✅\r\n\r\nThe Product code entry should in bankfast DB.accountType should *not* be deleted and the product won\'t be available on Apply, for below scenarios:\r\n * When the Product is be deactivated\r\n * When the Product is retired (the "Withdrawn From Sales Date" of the product is already reached)\r\n\r\nAcceptance Criteria indicated ✅\r\n\r\n*AC*\r\n\r\n*AC01*\r\n\r\nGiven a product had been created and published through Product Factory\r\nWhen the "Withdrawn From Sales Date" of the product is reached or passed\r\nOr when the product is be deactivated\r\nThen the product should still be present in be present in bankfast DB.accountType\r\n\r\n \r\n\r\n*Definition of Done (before sending to QA for testing):*\r\n * The changes had been implemented based on the ACs \r\n * Unit Testing completed in both local and CI environment\r\n * All PR comments addressed\r\n * Code merged in Master\r\n * Resolution provided',
            to: null,
            toString:
              'P&S : HIgh\r\nDefect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\nDefect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\na)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\nb)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\nc)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\nExpecting Result – when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.\r\n----\r\nSST update on 21 Feb:\r\n\r\nBelow three tickets are related with each other, the scope of these tickets are:\r\n**\r\n * *UECSUP-7831 is for Apply and BankFast*\r\n * *UECSUP-7878 is for BankFast*\r\n * *UECSUP-7859 is for Apply and LendFast*\r\n\r\n*Definition of Ready:*\r\n\r\nRequirements cleared and clarified ✅\r\n\r\nThe Product code entry should in bankfast DB.accountType should *not* be deleted and the product won\'t be available on Apply, when the Product is be deactivated.\r\n\r\nAcceptance Criteria indicated ✅\r\n\r\n*AC*\r\n\r\n*AC01*\r\n\r\nGiven a product had been created and published through Product Factory\r\nWhen the "Withdrawn From Sales Date" of the product is reached or passed\r\nOr when the product is be deactivated\r\nThen the product should still be present in be present in bankfast DB.accountType\r\n\r\n \r\n\r\n*Definition of Done (before sending to QA for testing):*\r\n * The changes had been implemented based on the ACs \r\n * Unit Testing completed in both local and CI environment\r\n * All PR comments addressed\r\n * Code merged in Master\r\n * Resolution provided',
          },
        ],
      },
      {
        id: "9079271",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_haoyan",
          name: "e_tws_haoyan",
          key: "JIRAUSER20381",
          emailAddress: "e_tws_haoyan@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Hao Yan",
          active: true,
          timeZone: "Asia/Shanghai",
        },
        created: "2022-02-22T12:51:15.590+1100",
        items: [
          {
            field: "description",
            fieldtype: "jira",
            from: null,
            fromString:
              'P&S : HIgh\r\nDefect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\nDefect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\na)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\nb)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\nc)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\nExpecting Result – when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.\r\n----\r\nSST update on 21 Feb:\r\n\r\nBelow three tickets are related with each other, the scope of these tickets are:\r\n**\r\n * *UECSUP-7831 is for Apply and BankFast*\r\n * *UECSUP-7878 is for BankFast*\r\n * *UECSUP-7859 is for Apply and LendFast*\r\n\r\n*Definition of Ready:*\r\n\r\nRequirements cleared and clarified ✅\r\n\r\nThe Product code entry should in bankfast DB.accountType should *not* be deleted and the product won\'t be available on Apply, when the Product is be deactivated.\r\n\r\nAcceptance Criteria indicated ✅\r\n\r\n*AC*\r\n\r\n*AC01*\r\n\r\nGiven a product had been created and published through Product Factory\r\nWhen the "Withdrawn From Sales Date" of the product is reached or passed\r\nOr when the product is be deactivated\r\nThen the product should still be present in be present in bankfast DB.accountType\r\n\r\n \r\n\r\n*Definition of Done (before sending to QA for testing):*\r\n * The changes had been implemented based on the ACs \r\n * Unit Testing completed in both local and CI environment\r\n * All PR comments addressed\r\n * Code merged in Master\r\n * Resolution provided',
            to: null,
            toString:
              'P&S : HIgh\r\nDefect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\nDefect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\na)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\nb)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\nc)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\nExpecting Result – when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.\r\n----\r\nSST update on 21 Feb:\r\n\r\nBelow three tickets are related with each other, the scope of these tickets are:\r\n**\r\n * *UECSUP-7831 is for Apply and BankFast*\r\n * *UECSUP-7878 is for BankFast*\r\n * *UECSUP-7859 is for Apply and LendFast*\r\n\r\n*Definition of Ready:*\r\n\r\nRequirements cleared and clarified ✅\r\n\r\nThe Product code entry should be in bankfastDB.accountType should *not* be deleted and the product won\'t be available on Apply, when the Product is be deactivated.\r\n\r\nAcceptance Criteria indicated ✅\r\n\r\n*AC*\r\n\r\n*AC01*\r\n\r\nGiven a product had been created and published through Product Factory\r\nWhen the "Withdrawn From Sales Date" of the product is reached or passed\r\nOr when the product is be deactivated\r\nThen the product should still be present in be present in bankfastDB.accountType\r\n\r\n \r\n\r\n*Definition of Done (before sending to QA for testing):*\r\n * The changes had been implemented based on the ACs \r\n * Unit Testing completed in both local and CI environment\r\n * All PR comments addressed\r\n * Code merged in Master\r\n * Resolution provided',
          },
        ],
      },
      {
        id: "9079963",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=abhishikthnanduri",
          name: "abhishikthnanduri",
          key: "JIRAUSER20578",
          emailAddress: "Abhishikth.Nanduri@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Abhishikth Nanduri",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-02-22T15:07:59.870+1100",
        items: [
          {
            field: "Sprint",
            fieldtype: "custom",
            from: null,
            fromString: null,
            to: "5579",
            toString: "1.0 - Mercury Sprint 1",
          },
          {
            field: "Story Points",
            fieldtype: "custom",
            from: null,
            fromString: null,
            to: null,
            toString: "2",
          },
          {
            field: "assignee",
            fieldtype: "jira",
            from: "geethavivekrajasekar",
            fromString: "Geethavivek Rajasekar",
            to: "JIRAUSER20626",
            toString: "Kaiwei Yang",
          },
        ],
      },
      {
        id: "9080185",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=abhishikthnanduri",
          name: "abhishikthnanduri",
          key: "JIRAUSER20578",
          emailAddress: "Abhishikth.Nanduri@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Abhishikth Nanduri",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-02-22T15:55:23.896+1100",
        items: [
          {
            field: "Story Points",
            fieldtype: "custom",
            from: null,
            fromString: "2",
            to: null,
            toString: "3",
          },
        ],
      },
      {
        id: "9081228",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_haoyan",
          name: "e_tws_haoyan",
          key: "JIRAUSER20381",
          emailAddress: "e_tws_haoyan@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Hao Yan",
          active: true,
          timeZone: "Asia/Shanghai",
        },
        created: "2022-02-22T19:13:46.875+1100",
        items: [
          {
            field: "description",
            fieldtype: "jira",
            from: null,
            fromString:
              'P&S : HIgh\r\nDefect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\nDefect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\na)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\nb)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\nc)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\nExpecting Result – when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.\r\n----\r\nSST update on 21 Feb:\r\n\r\nBelow three tickets are related with each other, the scope of these tickets are:\r\n**\r\n * *UECSUP-7831 is for Apply and BankFast*\r\n * *UECSUP-7878 is for BankFast*\r\n * *UECSUP-7859 is for Apply and LendFast*\r\n\r\n*Definition of Ready:*\r\n\r\nRequirements cleared and clarified ✅\r\n\r\nThe Product code entry should be in bankfastDB.accountType should *not* be deleted and the product won\'t be available on Apply, when the Product is be deactivated.\r\n\r\nAcceptance Criteria indicated ✅\r\n\r\n*AC*\r\n\r\n*AC01*\r\n\r\nGiven a product had been created and published through Product Factory\r\nWhen the "Withdrawn From Sales Date" of the product is reached or passed\r\nOr when the product is be deactivated\r\nThen the product should still be present in be present in bankfastDB.accountType\r\n\r\n \r\n\r\n*Definition of Done (before sending to QA for testing):*\r\n * The changes had been implemented based on the ACs \r\n * Unit Testing completed in both local and CI environment\r\n * All PR comments addressed\r\n * Code merged in Master\r\n * Resolution provided',
            to: null,
            toString:
              'P&S : HIgh\r\nDefect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\nDefect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\na)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\nb)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\nc)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\nExpecting Result – when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.\r\n----\r\nSST update on 21 Feb:\r\n\r\nBelow three tickets are related with each other, the scope of these tickets are:\r\n**\r\n * *UECSUP-7831 is for Apply and BankFast*\r\n * *UECSUP-7878 is for BankFast*\r\n * *UECSUP-7859 is for Apply and LendFast*\r\n\r\n*Definition of Ready:*\r\n\r\nRequirements cleared and clarified ✅\r\n\r\nThe Product code entry should be in bankfastDB.accountType should *not* be deleted and the product won\'t be available on Apply, when the Product is be deactivated.\r\n\r\nAcceptance Criteria indicated ✅\r\n\r\n*AC*\r\n\r\n*AC01*\r\n\r\nGiven a product had been created and published through Product Factory\r\nWhen the "Withdrawn Date" of the product is reached or passed\r\nOr when the product is be deactivated\r\nThen the product should still be present in be present in bankfastDB.accountType\r\n\r\n \r\n\r\n*Definition of Done (before sending to QA for testing):*\r\n * The changes had been implemented based on the ACs \r\n * Unit Testing completed in both local and CI environment\r\n * All PR comments addressed\r\n * Code merged in Master\r\n * Resolution provided',
          },
        ],
      },
      {
        id: "9086113",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-02-24T00:53:17.009+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2206349",
            fromString: "2206349",
            to: null,
            toString: null,
          },
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: null,
            fromString: null,
            to: "0",
            toString: "0",
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: null,
            fromString: null,
            to: "12600",
            toString: "12600",
          },
        ],
      },
      {
        id: "9088372",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-02-24T16:09:55.191+1100",
        items: [
          {
            field: "status",
            fieldtype: "jira",
            from: "1",
            fromString: "Open",
            to: "3",
            toString: "In Progress",
          },
        ],
      },
      {
        id: "9109997",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-02T20:13:53.780+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2211410",
            fromString: "2211410",
            to: null,
            toString: null,
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "12600",
            fromString: "12600",
            to: "32400",
            toString: "32400",
          },
        ],
      },
      {
        id: "9109998",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-02T20:14:04.958+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2211411",
            fromString: "2211411",
            to: null,
            toString: null,
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "32400",
            fromString: "32400",
            to: "37800",
            toString: "37800",
          },
        ],
      },
      {
        id: "9110000",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-02T20:14:19.461+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2211412",
            fromString: "2211412",
            to: null,
            toString: null,
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "37800",
            fromString: "37800",
            to: "46800",
            toString: "46800",
          },
        ],
      },
      {
        id: "9118236",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=maritedmaturana",
          name: "maritedmaturana",
          key: "maritedmaturana",
          emailAddress: "marited.maturana@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?ownerId=maritedmaturana&avatarId=19178",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&ownerId=maritedmaturana&avatarId=19178",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&ownerId=maritedmaturana&avatarId=19178",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&ownerId=maritedmaturana&avatarId=19178",
          },
          displayName: "Marited Maturana",
          active: true,
          timeZone: "Asia/Singapore",
        },
        created: "2022-03-04T22:08:08.748+1100",
        items: [
          {
            field: "Epic Link",
            fieldtype: "custom",
            from: null,
            fromString: null,
            to: "479913",
            toString: "UECSUP-7939",
          },
          {
            field: "Team",
            fieldtype: "custom",
            from: null,
            fromString: null,
            to: null,
            toString: "INHERIT",
          },
        ],
      },
      {
        id: "9121332",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-07T16:18:07.468+1100",
        items: [
          {
            field: "assignee",
            fieldtype: "jira",
            from: "JIRAUSER20626",
            fromString: "Kaiwei Yang",
            to: "keerthigadula",
            toString: "Keerthi Gadula",
          },
        ],
      },
      {
        id: "9121333",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-07T16:18:27.417+1100",
        items: [
          {
            field: "Attachment",
            fieldtype: "jira",
            from: null,
            fromString: null,
            to: "781449",
            toString: "image-2022-03-07-13-18-25-419.png",
          },
        ],
      },
      {
        id: "9121334",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-07T16:18:52.426+1100",
        items: [
          {
            field: "Attachment",
            fieldtype: "jira",
            from: null,
            fromString: null,
            to: "781450",
            toString: "image-2022-03-07-13-18-50-114.png",
          },
        ],
      },
      {
        id: "9121634",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=abhishikthnanduri",
          name: "abhishikthnanduri",
          key: "JIRAUSER20578",
          emailAddress: "Abhishikth.Nanduri@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Abhishikth Nanduri",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-07T17:08:24.219+1100",
        items: [
          {
            field: "status",
            fieldtype: "jira",
            from: "3",
            fromString: "In Progress",
            to: "10040",
            toString: "For Review",
          },
        ],
      },
      {
        id: "9123071",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=abhishikthnanduri",
          name: "abhishikthnanduri",
          key: "JIRAUSER20578",
          emailAddress: "Abhishikth.Nanduri@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Abhishikth Nanduri",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-08T03:43:22.852+1100",
        items: [
          {
            field: "Sprint",
            fieldtype: "custom",
            from: "5579",
            fromString: "1.0 - Mercury Sprint 1",
            to: "5579, 5599",
            toString: "1.0 - Mercury Sprint 1, 1.0 - Mercury Sprint 2",
          },
        ],
      },
      {
        id: "9123651",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=keerthigadula",
          name: "keerthigadula",
          key: "keerthigadula",
          emailAddress: "Keerthi.Gadula@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?ownerId=keerthigadula&avatarId=20876",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&ownerId=keerthigadula&avatarId=20876",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&ownerId=keerthigadula&avatarId=20876",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&ownerId=keerthigadula&avatarId=20876",
          },
          displayName: "Keerthi Gadula",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-08T11:26:02.804+1100",
        items: [
          {
            field: "status",
            fieldtype: "jira",
            from: "10040",
            fromString: "For Review",
            to: "3",
            toString: "In Progress",
          },
        ],
      },
      {
        id: "9123652",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=keerthigadula",
          name: "keerthigadula",
          key: "keerthigadula",
          emailAddress: "Keerthi.Gadula@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?ownerId=keerthigadula&avatarId=20876",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&ownerId=keerthigadula&avatarId=20876",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&ownerId=keerthigadula&avatarId=20876",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&ownerId=keerthigadula&avatarId=20876",
          },
          displayName: "Keerthi Gadula",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-08T11:26:06.040+1100",
        items: [
          {
            field: "assignee",
            fieldtype: "jira",
            from: "keerthigadula",
            fromString: "Keerthi Gadula",
            to: "JIRAUSER20626",
            toString: "Kaiwei Yang",
          },
        ],
      },
      {
        id: "9125458",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=abhishikthnanduri",
          name: "abhishikthnanduri",
          key: "JIRAUSER20578",
          emailAddress: "Abhishikth.Nanduri@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Abhishikth Nanduri",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-08T17:21:48.949+1100",
        items: [
          {
            field: "Comment",
            fieldtype: "jira",
            from: "Will take 0.5d to finish this task ( PR Merging )",
            fromString: null,
            to: null,
            toString: null,
          },
        ],
      },
      {
        id: "9125514",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=abhishikthnanduri",
          name: "abhishikthnanduri",
          key: "JIRAUSER20578",
          emailAddress: "Abhishikth.Nanduri@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Abhishikth Nanduri",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-08T17:30:07.318+1100",
        items: [
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: "0",
            fromString: "0",
            to: "28800",
            toString: "28800",
          },
        ],
      },
      {
        id: "9128335",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=keerthigadula",
          name: "keerthigadula",
          key: "keerthigadula",
          emailAddress: "Keerthi.Gadula@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?ownerId=keerthigadula&avatarId=20876",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&ownerId=keerthigadula&avatarId=20876",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&ownerId=keerthigadula&avatarId=20876",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&ownerId=keerthigadula&avatarId=20876",
          },
          displayName: "Keerthi Gadula",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-09T13:34:18.630+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2216119",
            fromString: "2216119",
            to: null,
            toString: null,
          },
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: "28800",
            fromString: "28800",
            to: "27000",
            toString: "27000",
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "46800",
            fromString: "46800",
            to: "48600",
            toString: "48600",
          },
        ],
      },
      {
        id: "9134542",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-10T20:45:22.072+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2217426",
            fromString: "2217426",
            to: null,
            toString: null,
          },
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: "27000",
            fromString: "27000",
            to: "0",
            toString: "0",
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "48600",
            fromString: "48600",
            to: "75600",
            toString: "75600",
          },
        ],
      },
      {
        id: "9134544",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-10T20:45:48.077+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2217427",
            fromString: "2217427",
            to: null,
            toString: null,
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "75600",
            fromString: "75600",
            to: "102600",
            toString: "102600",
          },
        ],
      },
      {
        id: "9134550",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-10T20:47:13.357+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2217429",
            fromString: "2217429",
            to: null,
            toString: null,
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "102600",
            fromString: "102600",
            to: "129600",
            toString: "129600",
          },
        ],
      },
      {
        id: "9134552",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-10T20:47:23.813+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2217429",
            fromString: "2217429",
            to: null,
            toString: null,
          },
          {
            field: "WorklogTimeSpent",
            fieldtype: "jira",
            from: "27000",
            fromString: "7.5h",
            to: null,
            toString: null,
          },
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: "0",
            fromString: "0",
            to: "27000",
            toString: "27000",
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "129600",
            fromString: "129600",
            to: "102600",
            toString: "102600",
          },
        ],
      },
      {
        id: "9134556",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-10T20:48:24.831+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2217434",
            fromString: "2217434",
            to: null,
            toString: null,
          },
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: "27000",
            fromString: "27000",
            to: "0",
            toString: "0",
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "102600",
            fromString: "102600",
            to: "129600",
            toString: "129600",
          },
        ],
      },
      {
        id: "9134557",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-10T20:48:36.595+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2217435",
            fromString: "2217435",
            to: null,
            toString: null,
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "129600",
            fromString: "129600",
            to: "156600",
            toString: "156600",
          },
        ],
      },
      {
        id: "9134559",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-10T20:48:43.608+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2217437",
            fromString: "2217437",
            to: null,
            toString: null,
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "156600",
            fromString: "156600",
            to: "183600",
            toString: "183600",
          },
        ],
      },
      {
        id: "9134565",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-10T20:49:54.551+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2217437",
            fromString: "2217437",
            to: null,
            toString: null,
          },
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: "0",
            fromString: "0",
            to: "14400",
            toString: "14400",
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "183600",
            fromString: "183600",
            to: "169200",
            toString: "169200",
          },
        ],
      },
      {
        id: "9134590",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-10T20:54:42.012+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2217435",
            fromString: "2217435",
            to: null,
            toString: null,
          },
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: "14400",
            fromString: "14400",
            to: "21600",
            toString: "21600",
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "169200",
            fromString: "169200",
            to: "162000",
            toString: "162000",
          },
        ],
      },
      {
        id: "9137723",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-11T19:20:11.163+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2218591",
            fromString: "2218591",
            to: null,
            toString: null,
          },
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: "21600",
            fromString: "21600",
            to: "12600",
            toString: "12600",
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "162000",
            fromString: "162000",
            to: "171000",
            toString: "171000",
          },
        ],
      },
      {
        id: "9138244",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-11T21:11:54.586+1100",
        items: [
          {
            field: "assignee",
            fieldtype: "jira",
            from: "JIRAUSER20626",
            fromString: "Kaiwei Yang",
            to: "JIRAUSER20271",
            toString: "Sriman Valathuru",
          },
        ],
      },
      {
        id: "9138336",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=keerthigadula",
          name: "keerthigadula",
          key: "keerthigadula",
          emailAddress: "Keerthi.Gadula@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?ownerId=keerthigadula&avatarId=20876",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&ownerId=keerthigadula&avatarId=20876",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&ownerId=keerthigadula&avatarId=20876",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&ownerId=keerthigadula&avatarId=20876",
          },
          displayName: "Keerthi Gadula",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-11T22:02:23.195+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2218863",
            fromString: "2218863",
            to: null,
            toString: null,
          },
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: "12600",
            fromString: "12600",
            to: "11160",
            toString: "11160",
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "171000",
            fromString: "171000",
            to: "172440",
            toString: "172440",
          },
        ],
      },
      {
        id: "9155401",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=srimanvalathuru",
          name: "srimanvalathuru",
          key: "JIRAUSER20271",
          emailAddress: "sriman.valathuru@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Sriman Valathuru",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2022-03-18T14:51:06.992+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2223139",
            fromString: "2223139",
            to: null,
            toString: null,
          },
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: "11160",
            fromString: "11160",
            to: "360",
            toString: "360",
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "172440",
            fromString: "172440",
            to: "183240",
            toString: "183240",
          },
        ],
      },
      {
        id: "9155403",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=srimanvalathuru",
          name: "srimanvalathuru",
          key: "JIRAUSER20271",
          emailAddress: "sriman.valathuru@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Sriman Valathuru",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2022-03-18T14:51:28.115+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2223141",
            fromString: "2223141",
            to: null,
            toString: null,
          },
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: "360",
            fromString: "360",
            to: "0",
            toString: "0",
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "183240",
            fromString: "183240",
            to: "194040",
            toString: "194040",
          },
        ],
      },
      {
        id: "9155414",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=srimanvalathuru",
          name: "srimanvalathuru",
          key: "JIRAUSER20271",
          emailAddress: "sriman.valathuru@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Sriman Valathuru",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2022-03-18T14:52:14.695+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2223144",
            fromString: "2223144",
            to: null,
            toString: null,
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "194040",
            fromString: "194040",
            to: "204840",
            toString: "204840",
          },
        ],
      },
      {
        id: "9156937",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=srimanvalathuru",
          name: "srimanvalathuru",
          key: "JIRAUSER20271",
          emailAddress: "sriman.valathuru@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Sriman Valathuru",
          active: true,
          timeZone: "Asia/Kolkata",
        },
        created: "2022-03-18T21:11:16.436+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2223878",
            fromString: "2223878",
            to: null,
            toString: null,
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "204840",
            fromString: "204840",
            to: "208440",
            toString: "208440",
          },
        ],
      },
      {
        id: "9160552",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-21T17:35:05.736+1100",
        items: [
          {
            field: "Attachment",
            fieldtype: "jira",
            from: null,
            fromString: null,
            to: "785174",
            toString: "image-2022-03-21-14-34-58-117.png",
          },
        ],
      },
      {
        id: "9160553",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-21T17:35:07.820+1100",
        items: [
          {
            field: "Attachment",
            fieldtype: "jira",
            from: null,
            fromString: null,
            to: "785175",
            toString: "image-2022-03-21-14-35-05-406.png",
          },
        ],
      },
      {
        id: "9160567",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-21T17:36:55.310+1100",
        items: [
          {
            field: "Attachment",
            fieldtype: "jira",
            from: null,
            fromString: null,
            to: "785176",
            toString: "image-2022-03-21-14-36-52-658.png",
          },
        ],
      },
      {
        id: "9160578",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-21T17:38:18.656+1100",
        items: [
          {
            field: "Attachment",
            fieldtype: "jira",
            from: null,
            fromString: null,
            to: "785177",
            toString: "image-2022-03-21-14-38-16-837.png",
          },
        ],
      },
      {
        id: "9161166",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-21T20:30:09.693+1100",
        items: [
          {
            field: "status",
            fieldtype: "jira",
            from: "3",
            fromString: "In Progress",
            to: "10040",
            toString: "For Review",
          },
        ],
      },
      {
        id: "9162650",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_haoyan",
          name: "e_tws_haoyan",
          key: "JIRAUSER20381",
          emailAddress: "e_tws_haoyan@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Hao Yan",
          active: true,
          timeZone: "Asia/Shanghai",
        },
        created: "2022-03-22T12:40:41.684+1100",
        items: [
          {
            field: "assignee",
            fieldtype: "jira",
            from: "JIRAUSER20271",
            fromString: "Sriman Valathuru",
            to: "JIRAUSER20246",
            toString: "Ruel Barrina",
          },
        ],
      },
      {
        id: "9162656",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=ruelbarrina",
          name: "ruelbarrina",
          key: "JIRAUSER20246",
          emailAddress: "ruel.barrina@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Ruel Barrina",
          active: true,
          timeZone: "Asia/Manila",
        },
        created: "2022-03-22T12:44:20.027+1100",
        items: [
          {
            field: "status",
            fieldtype: "jira",
            from: "10040",
            fromString: "For Review",
            to: "3",
            toString: "In Progress",
          },
        ],
      },
      {
        id: "9162657",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=ruelbarrina",
          name: "ruelbarrina",
          key: "JIRAUSER20246",
          emailAddress: "ruel.barrina@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Ruel Barrina",
          active: true,
          timeZone: "Asia/Manila",
        },
        created: "2022-03-22T12:44:45.185+1100",
        items: [
          {
            field: "assignee",
            fieldtype: "jira",
            from: "JIRAUSER20246",
            fromString: "Ruel Barrina",
            to: "JIRAUSER20626",
            toString: "Kaiwei Yang",
          },
        ],
      },
      {
        id: "9162803",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-22T13:20:24.544+1100",
        items: [
          {
            field: "assignee",
            fieldtype: "jira",
            from: "JIRAUSER20626",
            fromString: "Kaiwei Yang",
            to: "JIRAUSER20246",
            toString: "Ruel Barrina",
          },
          {
            field: "description",
            fieldtype: "jira",
            from: null,
            fromString:
              'P&S : HIgh\r\nDefect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\nDefect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\na)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\nb)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\nc)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\nExpecting Result – when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.\r\n----\r\nSST update on 21 Feb:\r\n\r\nBelow three tickets are related with each other, the scope of these tickets are:\r\n**\r\n * *UECSUP-7831 is for Apply and BankFast*\r\n * *UECSUP-7878 is for BankFast*\r\n * *UECSUP-7859 is for Apply and LendFast*\r\n\r\n*Definition of Ready:*\r\n\r\nRequirements cleared and clarified ✅\r\n\r\nThe Product code entry should be in bankfastDB.accountType should *not* be deleted and the product won\'t be available on Apply, when the Product is be deactivated.\r\n\r\nAcceptance Criteria indicated ✅\r\n\r\n*AC*\r\n\r\n*AC01*\r\n\r\nGiven a product had been created and published through Product Factory\r\nWhen the "Withdrawn Date" of the product is reached or passed\r\nOr when the product is be deactivated\r\nThen the product should still be present in be present in bankfastDB.accountType\r\n\r\n \r\n\r\n*Definition of Done (before sending to QA for testing):*\r\n * The changes had been implemented based on the ACs \r\n * Unit Testing completed in both local and CI environment\r\n * All PR comments addressed\r\n * Code merged in Master\r\n * Resolution provided',
            to: null,
            toString:
              'P&S : HIgh\r\nDefect Summary ? When deactivating a product bankfast DB.accountType details getting deleted.\r\nDefect Details ? \r\n\r\nWhen we deactivating a product by entering the Withdrawn date on config manager, once the product is deactivated we have noticed that bankfast DB.accountType details for that product is getting deleted. There would be scenarios where a product is withdrawn from sale (i.e. from Apply) but there would be live customer/accounts linked to the product. When bankfast.accountType details are missing for a product and there are customer/accounts linked to it, we encounter following issues on elevate online:\r\n1.    WBBS-1987/UECSUP-4727/UECSUP-5067: Setup Maturity link under To Do List and kebab menu not displayed for any fixed term product which is Created and Launched using Product Factory. This was because getProducts integration was not making an entry into bankfast DB for the new product launched from product factory\r\n2.    WBBS-2026/ UECSUP-4728/: Issue accessing Transaction History page on Elevate Online for an application created using any product which is Created and Launched using Product Factory:\r\na)    From Account Servicing menu --> User is getting logged off & unable to re-login until the cache is cleared.\r\nb)    From Quick Link - --> User is getting logged off & unable to re-login until the cache is cleared.\r\nc)    From Account List menu --> On first attempt a blank page is loaded and on 2nd attempt onwards accessing from Account list menu loads the Transaction History properly  \r\nExpecting Result - when a product is retired from sales or deactivated, in both cases the product code entry should still be present in bankfast DB.accountType to avoid the issues highlighted above.\r\n----\r\nSST update on 21 Feb:\r\n\r\nBelow three tickets are related with each other, the scope of these tickets are:\r\n**\r\n * *UECSUP-7831 is for Apply and BankFast*\r\n * *UECSUP-7878 is for BankFast*\r\n * *UECSUP-7859 is for Apply and LendFast*\r\n\r\n*Definition of Ready:*\r\n\r\nRequirements cleared and clarified ✅\r\n\r\nThe Product code entry should be in bankfastDB.accountType should *not* be deleted and the product won\'t be available on Apply, when the Product is be deactivated.\r\n\r\nAcceptance Criteria indicated ✅\r\n\r\n*AC*\r\n\r\n*AC01*\r\n\r\nGiven a product had been created and published through Product Factory\r\nWhen the "Withdrawn Date" of the product is reached or passed\r\nOr when the product is be deactivated\r\nThen the product should still be present in be present in bankfastDB.accountType\r\n\r\n \r\n\r\n*Definition of Done (before sending to QA for testing):*\r\n * The changes had been implemented based on the ACs \r\n * Unit Testing completed in both local and CI environment\r\n * All PR comments addressed\r\n * Code merged in Master\r\n * Resolution provided',
          },
        ],
      },
      {
        id: "9163089",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=abhishikthnanduri",
          name: "abhishikthnanduri",
          key: "JIRAUSER20578",
          emailAddress: "Abhishikth.Nanduri@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Abhishikth Nanduri",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-22T14:08:27.472+1100",
        items: [
          {
            field: "status",
            fieldtype: "jira",
            from: "3",
            fromString: "In Progress",
            to: "10040",
            toString: "For Review",
          },
        ],
      },
      {
        id: "9163091",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=abhishikthnanduri",
          name: "abhishikthnanduri",
          key: "JIRAUSER20578",
          emailAddress: "Abhishikth.Nanduri@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Abhishikth Nanduri",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-22T14:08:36.068+1100",
        items: [
          {
            field: "status",
            fieldtype: "jira",
            from: "10040",
            fromString: "For Review",
            to: "10041",
            toString: "Under QA",
          },
        ],
      },
      {
        id: "9163218",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=ruelbarrina",
          name: "ruelbarrina",
          key: "JIRAUSER20246",
          emailAddress: "ruel.barrina@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Ruel Barrina",
          active: true,
          timeZone: "Asia/Manila",
        },
        created: "2022-03-22T14:25:03.735+1100",
        items: [
          {
            field: "assignee",
            fieldtype: "jira",
            from: "JIRAUSER20246",
            fromString: "Ruel Barrina",
            to: "JIRAUSER20397",
            toString: "Savera Somaiah",
          },
        ],
      },
      {
        id: "9163602",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=abhishikthnanduri",
          name: "abhishikthnanduri",
          key: "JIRAUSER20578",
          emailAddress: "Abhishikth.Nanduri@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Abhishikth Nanduri",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-22T15:53:53.078+1100",
        items: [
          {
            field: "Sprint",
            fieldtype: "custom",
            from: "5579, 5599",
            fromString: "1.0 - Mercury Sprint 1, 1.0 - Mercury Sprint 2",
            to: "5579, 5599, 5600",
            toString:
              "1.0 - Mercury Sprint 1, 1.0 - Mercury Sprint 2, 1.0 - Mercury Sprint 3",
          },
        ],
      },
      {
        id: "9163689",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=abhishikthnanduri",
          name: "abhishikthnanduri",
          key: "JIRAUSER20578",
          emailAddress: "Abhishikth.Nanduri@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=10192",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=10192",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=10192",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=10192",
          },
          displayName: "Abhishikth Nanduri",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-22T16:14:42.906+1100",
        items: [
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: "0",
            fromString: "0",
            to: "14400",
            toString: "14400",
          },
        ],
      },
      {
        id: "9173688",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-24T13:20:33.615+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2227058",
            fromString: "2227058",
            to: null,
            toString: null,
          },
          {
            field: "timeestimate",
            fieldtype: "jira",
            from: "14400",
            fromString: "14400",
            to: "0",
            toString: "0",
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "208440",
            fromString: "208440",
            to: "235440",
            toString: "235440",
          },
        ],
      },
      {
        id: "9173691",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-24T13:20:57.801+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2227060",
            fromString: "2227060",
            to: null,
            toString: null,
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "235440",
            fromString: "235440",
            to: "246240",
            toString: "246240",
          },
        ],
      },
      {
        id: "9179807",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-25T19:46:31.837+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2228518",
            fromString: "2228518",
            to: null,
            toString: null,
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "246240",
            fromString: "246240",
            to: "267840",
            toString: "267840",
          },
        ],
      },
      {
        id: "9179808",
        author: {
          self: "https://jira.sandstone.com.au/rest/api/2/user?username=e_tws_kaiweiyang",
          name: "e_tws_kaiweiyang",
          key: "JIRAUSER20626",
          emailAddress: "e_tws_kaiweiyang@sandstone.com.au",
          avatarUrls: {
            "48x48":
              "https://jira.sandstone.com.au/secure/useravatar?avatarId=21270",
            "24x24":
              "https://jira.sandstone.com.au/secure/useravatar?size=small&avatarId=21270",
            "16x16":
              "https://jira.sandstone.com.au/secure/useravatar?size=xsmall&avatarId=21270",
            "32x32":
              "https://jira.sandstone.com.au/secure/useravatar?size=medium&avatarId=21270",
          },
          displayName: "Kaiwei Yang",
          active: true,
          timeZone: "Australia/Sydney",
        },
        created: "2022-03-25T19:46:51.341+1100",
        items: [
          {
            field: "WorklogId",
            fieldtype: "jira",
            from: "2228518",
            fromString: "2228518",
            to: null,
            toString: null,
          },
          {
            field: "timespent",
            fieldtype: "jira",
            from: "267840",
            fromString: "267840",
            to: "273240",
            toString: "273240",
          },
        ],
      },
    ],
  },
};
