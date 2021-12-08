#gunicorn --workers=4 --threads=4 --worker-class=gthread api.wsgi
#try above config, will have to find optimal
from locust import HttpUser, TaskSet, task
import time


class WebsiteTasks(TaskSet):

    @task(5)
    def login(self):
        time.sleep(0.01)
        r = self.client.get('/admin')
        self.client.headers['Referer'] = self.client.base_url
        time.sleep(0.01)
        self.client.post("/user-api/LoginView", {"email": "admin@admin.com",
                         "password": "admin", 'csrfmiddlewaretoken': r.cookies['csrftoken']})

    # @task(4)
    # def logout(self):
    #     self.client.get("/user-api/LogoutView")
 #the number arg specifies that ratio of choosing(like if above was uncommented it would have been chosen half the time)
    @task(10)
    def questions(self):
        time.sleep(0.01)
        self.client.get("/exam-api/GetQuestions")


class WebsiteUser(HttpUser):
    tasks = [WebsiteTasks]
    min_wait = 0
    max_wait = 0
