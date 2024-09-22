/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 09-22-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class NewsApiIntegration {
    private static final String NEWS_API_KEY = 'YOUR_NEWSAPI_KEY'; // Replace with your API key
    private static final String NEWS_API_URL = 'https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=' + NEWS_API_KEY;

    @AuraEnabled(cacheable=true)
    public static List<NewsArticle> getCryptoNews() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(NEWS_API_URL);
        request.setMethod('GET');
        
        HttpResponse response = http.send(request);
        
        if (response.getStatusCode() == 200) {
            Map<String, Object> jsonResponse = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            List<Object> articles = (List<Object>) jsonResponse.get('articles');
            List<NewsArticle> newsArticles = new List<NewsArticle>();

            for (Object articleObj : articles) {
                Map<String, Object> articleMap = (Map<String, Object>) articleObj;
                NewsArticle article = new NewsArticle();
                article.title = (String) articleMap.get('title');
                article.description = (String) articleMap.get('description');
                article.url = (String) articleMap.get('url');
                article.urlToImage = (String) articleMap.get('urlToImage');
                newsArticles.add(article);
            }
            return newsArticles;
        } else {
            throw new AuraHandledException('Error fetching news: ' + response.getStatusCode());
        }
    }

    public class NewsArticle {
        @AuraEnabled public String title;
        @AuraEnabled public String description;
        @AuraEnabled public String url;
        @AuraEnabled public String urlToImage;
    }
}