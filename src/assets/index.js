import fish from "../assets/Patents/Fish.png"
import weight from "../assets/Patents/Weight.png"
import quality from "../assets/Patents/Quality.png"
import speed from "../assets/Patents/Speed.png"
import heating from "../assets/Patents/Heating.png"
import waterLogging from "../assets/Patents/waterLogging.png"
import earthQuake from "../assets/Patents/earthQuake.png"
import foodTable from "../assets/Patents/foodTable.png"
import curtain from "../assets/Patents/Curtain.png"
import washing from "../assets/Patents/washing.png"
import armoire from "../assets/Patents/armoire.png"
import utensils from "../assets/Patents/utensils.png"
import auto from "../assets/Patents/auto.png"
import cropsLong from "../assets/Patents/cropsLong.png"
import shoe from "../assets/Patents/shoe.png"
import pole from "../assets/Patents/pole.jpeg"
export const PAPERS = [
  {
    year: "2024 IEEE 9th International Conference for Convergence in Technology (I2CT)",
    role: "Sophisticated Safeguarding System of Automobile Rickshaws",
    company: "Conference Paper",
    description: `In this invention, a pressure plate will be connected to the ESP32 thing plus, the additional end of the ESP32 will be connected to the motor of the three-wheeler by which it commences the power unit. Appropriate restrictions and conditions will be applied with the ESP32 such that if the force on the three-wheeler exceeds the recommended limit, the EPS32 will act as a blockage and the motor will not start, resulting in the three-engine wheeler\’s not starting until and unless the safety measures of the transportation is not ensured properly... `,
    url: 'https://ieeexplore.ieee.org/document/10544209',
    technologies: ["Internet of Things", "Machine Learning", "TinyML", "RFID"],
  },
  {
    year: "2024 1st International Conference on Innovative Sustainable Technologies for Energy, Mechatronics, and Smart Systems (ISTEMS)",
    role: "Armoire with Computerized Washing and Airing System",
    url: 'https://ieeexplore.ieee.org/document/10560070',
  },
  {
    year: "2024 3rd International Conference for Innovation in Technology (INOCON)",
    role: "Artificial Intelligence and its Road to Altering the World Dynamics",
    company: "Conference Paper",
    description: "Humans have longed for computers to take over and make the monotonous and tedious tasks obsolete. Artificial Intelligence(AI) is just the right answers to this problem. There are not one but many sectors that are being manipulated by this ever- growing technology. It is safe to say that each day machines are getting better at understanding humans which is due to the evolution and innovation in this field. In this paper, we have uncovered various sectors in which artificial intelligence along with its various branches like Natural Language Processing (NLP), Machine Learning(ML) and Computer Vision have helped the world curate a better place by personalizing every daily use item. This has enhanced the way we live. However, there is a lot of data that is being used in order to bring these technologies to life. We have highlighted the constraints as well as the pleasures that this technology can bring us.",
    technologies: ["Review", "Machine Learning"],
    url: 'https://ieeexplore.ieee.org/document/10511959',
  },
  {
    year: "22023 3rd International Conference on Advance Computing and Innovative Technologies in Engineering (ICACITE)",
    role: "Autonomous Height Adjustable Speed Reducer",
    url: 'https://ieeexplore.ieee.org/document/10183110',
  },
  {
    role: "Energy-saving Space Heaters by Employing the Internet of Things and Algorithms for Learning",
    year: "2023 IEEE Technology & Engineering Management Conference - Asia Pacific (TEMSCON-ASPAC)",
    url: "https://ieeexplore.ieee.org/document/10531562"
  },
  {
    role: "Leveraging the Internet of Things and Algorithmic Learning for Athletes to Conserve Energy",
    year: "2024 3rd International Conference for Innovation in Technology (INOCON)",
    url: "https://ieeexplore.ieee.org/document/10512104/"
  },
  {
    role: "Smart Waste Monitoring System Over Urban Areas",
    year: "2024 International Conference on Advances in Computing Research on Science Engineering and Technology (ACROSET)",
    url: "https://ieeexplore.ieee.org/document/10743416/",
  },
  {
    role: "Implementing Artificial Intelligence with IoT, Prolonging the Existence of Marine Animals",
    year: "2023 3rd International Conference on Advancement in Electronics & Communication Engineering (AECE)",
    url: "https://ieeexplore.ieee.org/document/10428247/",
  }
];

export const PATENTS = [
  {
    id: 1,
    title: "Rfid-Based Secured Transportation System For Students",
    number: "IN 202411003468",
    description: "The present invention relates to guarantee pleasure while taking experience of driving and road safety by safeguarding system of automobile rickshaws made using combination of artificial intelligence with the ESP32 S-3 and machine learning models with the ESP32 thing plus consisting of novel features.",
    imageDes: auto,
    },
  {
    id: 2,
    title: "AUTOMATIC CLOTHES MANAGEMENT DEVICE",
    number: "IN 202311088273",
    description: "The present invention relates to an automatic clothes management device that is capable of providing a means to a user to easily wash out clothes by using optimum amount of water and detergent powder in accordance with the weight of the clothes automatically as well as drying the washed clothes to eliminate moisture from the clothes as well as hanging the washed clothes in a segregated manner, thereby eliminating requirement of external cloth hangers.",
    imageDes: washing,
  },
  {
    id:3,
    title: "AUTOMATED UTENSILS CLEANING DEVICE",
    number: "IN 202311088280",
    description:"The present invention relates to an automated utensils cleaning device that assists a user in cleaning the utensils in an automated manner by using less water in accordance with the location of the leftovers over the utensils. In addition, the proposed device is also capable of sanitizing and drying the utensils in minimum consumption time and with reduced manual efforts.",
    imageDes: utensils,
},
  {
    id: 4,
    title: "IoT based Eatery Management System",
    number: "IN 202311054421 ",
    description: "The present invention relates to an IOT-based eatery management system that provides a provision for enabling a user to remotely select an eatery where the  user desires to visit along with reservation time and preferred food-items the user 5 desires to consume, and based on the user-defined reservation time food-items are  prepared in order to reduce the amount of time spent on waiting for the food. Additionally, the proposed system is also capable of cleaning the dining table with minimal mess and remove the dirt immediately to leave the table completely new for the new arriving user.",
    imageDes: foodTable,
},
  {
    id: 5,
    title: "Autonomous System for fish monitoring and fish tank cleaning",
    number: "IN 202311014056",
    description: "The present invention relates to an aquatic life management system that is capable of improving the purity of the water by detecting the amount of oxygen, nitrogen, phosphate, ammonia, iron in order to increase the lifespan of the aquatic animals as well as capable of cleans the water without human intervention thereby aiding in eliminating the human error made during clean the water.",
    imageDes: fish,
  },
  {
    id: 6,
    title: "Weight-Based Exercise Monitoring System",
    number: "IN 202311049042",
    description: "The present invention relates to a weight-based exercise monitoring system that enables users to designate their desired weight for weight lifting workouts and provides a means to use that weight during exercises. Additionally, the proposed system also provides a means in monitoring their body posture and facial expressions to make necessary adjustments in weights to prevent potential injuries.",
    imageDes: weight,
  },
  {
    id: 7,
    title: "Quality Control System For Stored Water",
    number: "IN 202311049044",
    description: "The present invention relates to a quality control system for stored water that is capable of providing a means to a user for storing water along with notifying the user regarding quantity of water present within the storage tank in order to eliminate requirement for the user to physically look for quantity of water and to refill water within the storage tank. In addition, the system is capable of treating water at an interval of time to make the water consumable for the user along with eliminating any chances of occurrence of bacteria and viruses.",
    imageDes: quality,
  },
  {
    id: 8,
    title: "Adjustable Speed Breaker",
    number: "IN 202311048965",
    description: "The present invention relates to an adjustable speed breaker that regulates the speed of vehicles approaching towards the speed breaker and to enable the vehicle drivers to control the speed of vehicles in order to allow the pedestrians to cross the road easily. Additionally, the proposed breaker also illuminates different light) in accordance to the time (day/night) and weather condition for enabling the vehicle drivers to clearly see the breaker and thereby controlling the vehicles speed in order to reduce the chances of road-accidents.",
    imageDes: speed,
  },
  {
    id: 9,
    title: "Automatic Controlled Room Heating System",
    number: "IN 202311024304",
    description: "The present invention relates to an automatic controlled room heating system for providing controlled heat to a user inside an enclosure according to the external environment and other parameters such as oxygen level, carbon-dioxide, and humidity level as well as trip off the power supply to stop providing heating in case increasing the carbon-dioxide and decreasing of oxygen level is detected inside the enclosure in order to avoid unnecessary inconvenience of the user(s). Furthermore, the system is capable of detecting smoke level emitted by any gas leakage and stopping heating the enclosure in order to avoid chocking the user(s).",
    imageDes: heating,
  },
  {
    id: 10,
    title: "Water Logging Prevention System For Road Surfaces",
    number: "IN 202311054405", 
    description: "The present invention relates to a water logging prevention system for road surfaces that provides a provision for preventing the logging of rainwater on a road surface by automatically collecting the water underneath the road surface to reduce the risk of accidents and also health issues due to multiplication of insects/microbes in the stagnant rainwater and utilizing the collected water for settling down the dust/fog present in the surrounding for providing clear visibility of road to individuals. Additionally, the proposed system is also capable of monitoring the air quality index of the surrounding and takes necessary action in order to improve the quality of air, thereby aiding in reduction of the air pollution.",
    imageDes: waterLogging,
  },
  {
    id: 11,
    title: "Earthquake Surveillance And Management System",
    number: "IN 202311054408",
    description: "The present invention relates to an earthquake surveillance and management system that is capable of securing user(s) present within an enclosure in a confined structure in order to protect user(s) from any chances of injury due to earthquake tremors.",
    imageDes: earthQuake,
  },
  {
    id: 12, 
    title: "Automated Curtain Maintenance Device",
    number: "IN 202411017488", 
    description: "The present invention relates to an automated curtain maintenance device that is capable of detecting the intensity of light incident on the window panel and accordingly translates the curtain strands in front of the window, thereby allowing proper sunlight to enter the enclosure during daytime and ensuring proper privacy during night time.",
    imageDes: curtain,
  },
  {
    id: 13, 
    title: "Modular Clothes Maintenance And Storage Device",
    number: "IN 202311088277 ",
    description: "The present invention relates to a modular clothes maintenance and storage device that provides a provision of storing different types of clothes in an organized and segregated manner and allowing a user to easily access the clothes. Additionally, the proposed device determines soiling of stain/odor on the clothes and automatically, washes-off the clothes as well as dries and irons the clothes as means of keeping the clothes wrinkle-free, looking neat and crisp.",
    imageDes: armoire,
  },
  {
    id: 14,
    title: "Electric Pole System",
    number: "IN 202411064848", 
    description: "This innovative concept introduces smart electric poles that integrate IoT and learning algorithms to enhance power transmission efficiency and safety. Equipped with Raspberry Pi B4 modules, these poles monitor and control voltage, frequency, and other parameters while employing prediction models to detect faults in the power supply. Specially designed polycarbonate plastic chambers shield wires from environmental elements like sunlight, lightning, and strong winds, ensuring stability and preventing damage. A cooling mechanism regulates temperature, while magnetic bars counteract wire movements caused by wind. The poles feature a hydraulic system for height adjustment, addressing challenges in crowded urban areas. Smart RFID systems facilitate fault detection and localization, improving maintenance efficiency. Advanced insulators respond to voltage surges, mitigating the risk of fires and current leakage. By combining smart insulation, predictive monitoring, and mechanical adaptability, these electric poles aim to revolutionize power transmission with improved safety, reliability, and resilience against environmental and mechanical stresses.",
    imageDes: pole,
  },
  {
    id: 15, 
    title: "Smart Hail Protection System for Crops",
    number: "IN", 
    description: "The present invention relates to agricultural technology, more particularly, to a protection system for crops which reduces the damage that hailstorms and extreme weather conditions cause. More specifically, it involves a smart fiberglass containment system that utilizes automation deployment mechanisms, hydraulic systems, and advanced sensor technology to provide effective and sure protection against severe weather conditions for crops. The system also encompasses features of safety and manual control options to ensure that farmers get sound protection along with operational flexibility.",
    imageDes: {},
  },
  {
    id: 16,
    title: "SUSTAINABLE METHODS OF TRANSPORTING FODDER OVER LONG DISTANCES USING AIR MANIPULATION",
    number: "IN 202411089359",
    description: "The present invention generally relates to systems and methods for the transportation and preservation of perishable goods, particularly fruits and vegetables, during long-distance transit. More specifically, the invention pertains to an intelligent transportation system that integrates smart environmental controls, machine learning algorithms, safety mechanisms, and energy-efficient technologies to maintain optimal storage conditions, prevent spoilage, and enhance the safety of the goods during transport. The innovation further provides better security and stability for the transported produce by the use of airbag systems, hydraulic shock absorbers, and compressed air evacuation techniques that ensure the produce remains intact even when subjected to hard transportation conditions.",
    imageDes: cropsLong,
  },
  {
    id: 17,
    title: "AUTOMATIC SHOE CLEANER",
    number: "IN",
    description: "The present invention pertains to a smart footwear management system, and more specifically to an autonomous footwear storage, cleaning, maintenance, and health monitoring system incorporating advanced sensor technology, machine learning, robotic mechanisms, and foot health analysis. The invention encompasses a smart storage unit that automatically stores, cleans, dries, and categorizes shoes, along with more added features of lacing, health monitoring of the foot, and predictive selection based on environmental conditions of the shoe.",
    imageDes: shoe,
  },
];

export const PROJECTS = [
  {
    title: "Earthquake Protection System",
    url: "https://github.com/devyanshbatra/Earthquake_Protection_System",
    description: "Earthquakes pose significant risks to human life and infrastructure. During seismic events, individuals may become trapped in enclosed spaces, facing imminent danger from collapsing structures",
  },
  {
    title: "Lunar Lander",
    description: "This code implements a Deep Q-Network (DQN) to train an agent to solve the LunarLander-v2 environment. The agent learns to safely land a lunar module by maximizing rewards using a neural network, experience replay, and target networks. The environment provides a continuous state space and a discrete action space with four thrust commands.",
    url:"https://github.com/devyanshbatra/Lunar_Lander",
  },
  {
    title: "Pac Man Agent",
    description: "This code implements a Deep Q-Learning agent to solve a maze environment. It uses PyTorch to create a convolutional neural network for Q-value estimation. The agent learns to navigate from start to goal using epsilon-greedy exploration and experience replay. The training progress is visualized, and a custom function demonstrates the trained agent's performance in the maze.",
    url: "https://github.com/devyanshbatra/PAC_MAN_AGENT",
  },
  {
    title: "Heart_Disease_Classification",
    description: "Machine learning models significantly enhance heart disease diagnosis by analyzing complex medical data, including patient demographics, symptoms, lifestyle factors, and diagnostic tests. Utilizing algorithms like decision trees, support vector machines, and neural networks, these models identify intricate patterns crucial for accurate classification of conditions such as coronary artery disease and arrhythmias. Trained on extensive labeled datasets, they continuously improve predictive accuracy and excel in handling high-dimensional data. For example, models analyzing ECG data can quickly detect abnormal rhythms, enabling timely interventions. By leveraging advanced algorithms and robust datasets, these models transform heart disease diagnosis and treatment planning, ultimately improving clinical outcomes and patient care.",
    url: "https://github.com/devyanshbatra/Heart_Disease_Classification",
  },
  {
    title: "Automatic Speed Reducer",
    description: "Traffic condition in India is highly heterogeneous consisting of vehicles of different static and dynamic characteristics. The speeds of all vehicles are non-uniform. Further, it also leads to sudden slowing down of the whole traffic stream leading to traffic congestion. Speeding of vehicles increases the chances and seriousness of accident, so that the minimisation of speeding vehicles is significant as the streets/roads. Therefore, to regulate the speeds of different category of vehicles while travelling on a sharp turn or while approaching towards an intersection or buildings like schools and hospitals, traffic calming devices are provided on the roads. Speed breakers are one of the most commonly used traffic calming devices.",
    url: "https://github.com/devyanshbatra/Autonomous_Speed_Reducer",
  },
  {
    title: "Breast Cancer Type Classification", 
    description: "Breast cancer is a widespread and serious health concern, and early detection is crucial for effective treatment. This project focuses on building a breast cancer classifier using TensorFlow without relying on Convolutional Neural Networks (CNNs). Whether you're a healthcare professional, data scientist, or advocate for early cancer detection, this project offers a unique approach to breast cancer classification using classical machine learning techniques.",
    url: "https://github.com/devyanshbatra/Breast-Cancer-Type",
  },
    
]

export const EXPERIENCES = [
  {
    id: 1,
    position: "Project Intern",
    company: "Feynn Lab Consultancy Services",
    description: "Worked on ____ using _____",
    period: "Feb 2024- Sep 2024",
  },
  {
    id: 2,
    positon: "Project Intern",
    company: "Devskillhub training and consultancy",
    description: "",
    period: "June 2024- Nov 2024",
  },
  {
    id: 3,
    position: "Finance Intern", 
    company: "Awesome Advertising",
    description: "",
    period: "Nov 2024- Present", 
  }
]

export default {PAPERS, PATENTS, EXPERIENCES, PROJECTS}
