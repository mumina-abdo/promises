async function logMessage(message, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message);
}

logMessage("My name is Mumina", 3000); // 3-second delay

// Question2
async function logUserDataSequentially(userIds) {
    for (const userId of userIds) {
        try {
            const userData = await getUserData(userId);
            console.log(userData);
        } catch (error) {
            console.error(`Error fetching data for user ID ${userId}: ${error.message}`);
        }
    }
}

logUserDataSequentially([1, 2, 3, 4, 5]);

// Question 3
function manageTask() {
    performTask(resolve, reject)
        .then(() => {
            console.log("Task completed successfully");
        })
        .catch((error) => {
            console.error(" Task  an error", error);
        });
}

manageTask();


// question 4
function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        
        if (randomNumber > failureProbability) {
            resolve(`Task ${taskName} completed successfully.`);
        } else {
            reject(`Task ${taskName} failed.`);
        }
    });
}

async function executeWithRetry(taskName, retries, failureProbability) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        await unstableTask(taskName, failureProbability);
        console.log(`Attempt ${attempt}: Task "${taskName}" succeeded`);
        return;
      } catch (error) {
        console.error(`Attempt ${attempt}: ${error.message}`);
      }
    }
}

executeWithRetry('Data Processing', 3, 0.3);


const task = unstableTask("First Task", 0.7);

task.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});













