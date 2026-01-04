---
title: "AutoTherm: A Dataset and Benchmark for Thermal Comfort Estimation Indoors and in Vehicles"
date: 2024-25-07
featuredImage: "autotherm.png"
authors: ['Mark Colley*', 'Sebastian Hartwig*', 'Albin Zeqiri', 'Timo Ropinski', 'Enrico Rukzio']
venue: "Proceedings of the ACM Interactive Mobile Wearable Ubiquitous Technology 2024"
tags: ['Machine Learning', 'Deep Learning', 'Dataset', 'Ablation Study']
pdf: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/iui.inst.100/1-hci/hci-paper/2024/IMWUT2024_Thermal_Comfort_final_preprint.pdf"
doi: "https://dl.acm.org/doi/10.1145/3678503"
---

# AutoTherm: A Dataset and Benchmark for Thermal Comfort Estimation Indoors and in Vehicles

{{< figure src="https://viscom.publications.uni-ulm.de/api/uploads/251/teaser%20%283%29.jpg" >}}

<h2>Abstract</h2>
Thermal comfort inside buildings is a well-studied field where human judgment for thermal comfort is collected and may be used for automatic thermal comfort estimation. However, indoor scenarios are rather static in terms of thermal state changes and, thus, cannot be applied to dynamic conditions, e.g., inside a vehicle. In this work, we present our findings of a gap between building and in-vehicle scenarios regarding thermal comfort estimation. We provide evidence by comparing deep neural classifiers for thermal comfort estimation for indoor and in-vehicle conditions. Further, we introduce a temporal dataset for indoor predictions incorporating 31 input signals and self-labeled user ratings by 18 subjects in a self-built climatic chamber. For in-vehicle scenarios, we acquired a second dataset featuring human judgments from 20 subjects in a BMW 3 Series. Our experimental results indicate superior performance for estimations from time series data over single vector input. Leveraging modern machine learning architectures enables us to recognize human thermal comfort states and estimate future states automatically. We provide details on training a recurrent network-based classifier and perform an initial performance benchmark of the proposed dataset. Ultimately, we compare our collected dataset to publicly available thermal comfort datasets.

