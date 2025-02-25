from app import app, db
from flask import request, jsonify
from models import Friend


@app.route("/api/friends",methods=["GET"])
def get_friends():
  friends = Friend.query.all() 
  result = [friend.to_json() for friend in friends]
  return jsonify(result)
    

@app.route("/api/friends", methods=["POST"])
def create_friend():
    try:
        data = request.json

        required_fields = ["name", "role", "description", "gender"]
        for field in required_fields:
            if field not in required_fields:
                return jsonify({"message": f"Missing required field: {field}"}), 400 

        name = data.get('name')
        role = data.get('role')
        description = data.get('description')
        gender = data.get('gender')

        if gender == 'male':
            img_url = f"https://avatar.iran.liara.run/public/boy?username{name}"
        elif gender == 'female':
            img_url = f"https://avatar.iran.liara.run/public/girl?username{name}"

        new_friend = Friend(name=name, role=role, description=description, gender=gender, img_url=img_url)
        db.session.add(new_friend)
        db.session.commit()    

        return jsonify({"message":"Friend created successfully"}), 201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    



@app.route("/api/friends/<int:id>", methods=['DELETE'])
def friend_detail(id):
    try:
        friend = Friend.query.get(id)
        if not friend:
            return jsonify({'message': "Friend not found"}), 404

        db.session.delete(friend)
        db.session.commit()

        return jsonify({"message": "Friend successfully deleted"}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"{str(e)}"}), 500     


@app.route("/api/friends/<int:id>", methods=['PATCH'])
def edit_friend(id):
    try:
        friend = Friend.query.get(id)
        if not friend:
            return jsonify({'message': "Friend not found"}), 404

        data = request.json

        friend.name = data.get('name', friend.name)
        friend.role = data.get('role', friend.role)
        friend.description = data.get('description', friend.description) 
        friend.gender = data.get('gender', friend.gender)

        db.session.commit()

        return jsonify(friend.to_json()), 200  


    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"{str(e)}"}), 500     
            



    

